# 使用轻量级 Node.js 镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json
COPY package*.json ./

# 使用阿里云 npm 镜像加速安装 (针对国内服务器优化)
RUN npm config set registry https://registry.npmmirror.com && \
    npm install --production

# 复制所有文件
COPY . .

# 暴露后端端口
EXPOSE 3000

# 启动命令
CMD ["node", "server.js"]
