#!/bin/bash
# deploy-gh-pages.sh — 构建项目并复制编译产物到 GitHub Pages 目录
# 用法: ./deploy-gh-pages.sh
#
# 流程:
#   1. npm run build (输出到 docs/)
#   2. 将编译好的静态文件 (js, css, img, index.html 等) 复制到
#      ~/Desktop/awayfield/Awayc.github.io/
#   3. 保留目标目录中会变化的部分 (posts, tags, page, blogroll)

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
BUILD_DIR="$PROJECT_DIR/docs"
TARGET_DIR="$HOME/Desktop/awayfield/Awayc.github.io"

# 颜色输出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo "========================================"
echo "  复制编译产物到 GitHub Pages"
echo "========================================"

# 1. 构建
echo ""
echo -e "${YELLOW}▶ 构建项目...${NC}"
cd "$PROJECT_DIR"
npm run build
echo -e "${GREEN}✅ 构建完成${NC}"

# 2. 检查构建产物
if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}❌ 构建目录 $BUILD_DIR 不存在！${NC}"
    exit 1
fi

# 3. 检查目标目录
if [ ! -d "$TARGET_DIR" ]; then
    echo -e "${RED}❌ 目标目录 $TARGET_DIR 不存在！${NC}"
    exit 1
fi

echo ""
echo -e "${YELLOW}▶ 同步编译文件到 $TARGET_DIR ...${NC}"

# 4. 删除目标目录中的旧编译文件
echo "  清理旧的编译文件..."
rm -rf "$TARGET_DIR/js"
rm -rf "$TARGET_DIR/css"
rm -rf "$TARGET_DIR/img"
rm -f "$TARGET_DIR/index.html"
rm -f "$TARGET_DIR/favicon.ico"
rm -f "$TARGET_DIR/user.png"

# 5. 复制新的编译产物（只复制 webpack 生成的文件，不碰 posts/tags/page/blogroll）
echo "  复制新的编译文件..."
cp -r "$BUILD_DIR/js" "$TARGET_DIR/"
cp -r "$BUILD_DIR/css" "$TARGET_DIR/"
cp -r "$BUILD_DIR/img" "$TARGET_DIR/"
cp "$BUILD_DIR/index.html" "$TARGET_DIR/"
cp "$BUILD_DIR/favicon.ico" "$TARGET_DIR/"
cp "$BUILD_DIR/user.png" "$TARGET_DIR/"

echo -e "${GREEN}✅ 复制完成${NC}"
