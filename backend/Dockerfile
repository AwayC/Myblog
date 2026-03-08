# 使用轻量级 Node.js 镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 并安装依赖
COPY package*.json ./
RUN npm install --production

# 复制所有文件
COPY . .

# 暴露后端端口
EXPOSE 3000

# 启动命令
CMD ["node", "server.js"]
