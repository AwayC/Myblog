#!/bin/bash
# deploy.sh — 构建前端 + 部署到服务器并重载 nginx
# 用法: ./deploy.sh [--all | --backend]

set -euo pipefail

SERVER="root@aliyun"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REMOTE_DIR="/var/www/myweb"
REMOTE_MYBLOG="codes/Myblog"
DO_ALL=false
DO_BACKEND=false

for arg in "$@"; do
  case $arg in
    --all) DO_ALL=true ;;
    --backend) DO_BACKEND=true ;;
  esac
done

echo "========================================"
echo "  部署到 $SERVER:$REMOTE_DIR"
echo "========================================"

# ---- 1. 构建前端 ----
echo ""
echo "▶ 构建前端..."
cd "$SCRIPT_DIR"
npm run build
echo "  构建完成"

# ---- 2. 部署前端静态文件 ----
echo ""
echo "▶ 部署前端静态文件..."
rsync -avz \
    --delete \
    --exclude=".git" \
    --exclude="posts/" \
    --exclude="tags/" \
    --exclude="blogroll/" \
    --exclude="profile.json" \
    --exclude="page/" \
    --exclude="img/" \
    "$SCRIPT_DIR/docs/" \
    "$SERVER:$REMOTE_DIR/"

# ---- 3. 部署后端 (仅 --backend 或 --all) ----
if $DO_ALL || $DO_BACKEND; then
  echo ""
  echo "▶ 部署后端..."
  rsync -avz \
      --exclude=".git" \
      --exclude=".gitignore" \
      --exclude=".dockerignore" \
      --exclude="admin.json" \
      --exclude="admin.example.json" \
      --exclude="node_modules" \
      --exclude="database.db" \
      --exclude=".env" \
      --exclude=".DS_Store" \
      "$SCRIPT_DIR/backend/" \
      "$SERVER:$REMOTE_MYBLOG/backend/"
  # 也同步 docker-compose.yml
  rsync -avz \
      "$SCRIPT_DIR/docker-compose.yml" \
      "$SERVER:$REMOTE_MYBLOG/docker-compose.yml"
  echo ""
  echo "▶ 重建并重启后端容器..."
  ssh "$SERVER" bash -s << 'SSH_SCRIPT'
    set -euo pipefail
    CONTAINER="blog-api"

    # 停旧容器（docker-compose 1.29.2 有 bug，直接 docker run）
    docker stop "$CONTAINER" 2>/dev/null || true
    docker rm "$CONTAINER" 2>/dev/null || true

    docker build -t myblog_backend ~/codes/Myblog/backend/

    docker run -d \
      --name "$CONTAINER" \
      --restart always \
      -p 3000:3000 \
      -v ~/codes/Myblog/backend/database.db:/app/database.db \
      -v /var/www/myweb/posts:/public/posts \
      -v /var/www/myweb/tags:/public/tags \
      -v /var/www/myweb/blogroll:/public/blogroll \
      -v /var/www/myweb/profile.json:/public/profile.json:ro \
      --env-file ~/codes/Myblog/backend/.env \
      --network host \
      myblog_backend

    echo "  后端容器已更新"
SSH_SCRIPT
fi

# ---- 4. 重载 nginx ----
echo ""
echo "▶ SSH: 重载 nginx..."
ssh "$SERVER" bash -s << 'SSH_SCRIPT'
    set -euo pipefail

    # 确保 nginx 在运行（之前可能被意外停止）
    if systemctl is-active --quiet nginx; then
      echo "  nginx 运行中"
    else
      echo "  nginx 未运行，正在启动..."
      systemctl start nginx
    fi

    echo "  检查 nginx 配置..."
    if nginx -t 2>&1; then
        echo "  nginx 配置检查通过"
        nginx -s reload 2>&1 && echo "  nginx 已重载"
    else
        echo "  ❌ nginx 配置有误，请检查"
        exit 1
    fi
SSH_SCRIPT

echo ""
echo "========================================"
echo "  ✅ 部署完成！"
echo "========================================"
