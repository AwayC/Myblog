#!/bin/bash
# sync-data.sh — 从服务器拉回文章数据到本地备份
# 用法: ./sync-data.sh
#       拉完后 git add + commit 即可归档

set -euo pipefail

SERVER="root@aliyun"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "========================================"
echo "  从 $SERVER 拉取文章数据"
echo "========================================"

echo ""
echo "▶ 拉取 public/posts/ ..."
rsync -avz \
    "$SERVER:/var/www/myweb/public/posts/" \
    "$SCRIPT_DIR/public/posts/"

echo ""
echo "▶ 拉取 public/tags/ ..."
rsync -avz \
    "$SERVER:/var/www/myweb/public/tags/" \
    "$SCRIPT_DIR/public/tags/"

echo ""
echo "▶ 拉取 public/blogroll/ ..."
rsync -avz \
    "$SERVER:/var/www/myweb/public/blogroll/" \
    "$SCRIPT_DIR/public/blogroll/"

echo ""
echo "▶ 拉取 public/profile.json ..."
rsync -avz \
    "$SERVER:/var/www/myweb/public/profile.json" \
    "$SCRIPT_DIR/public/profile.json"

echo ""
echo "========================================"
echo "  ✅ 数据拉取完成"
echo "  git add public/ && git commit -m 'sync server data'"
echo "========================================"
