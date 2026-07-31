# Myblog

Personal blog with Vue 3 frontend + Node.js backend, admin dashboard for managing posts.

## Project setup

```bash
npm install
cd backend && npm install
```

### Configure

```bash
# Backend env
cp backend/.env.example backend/.env

# Admin credentials
cp backend/admin.example.json backend/admin.json
```

Edit `backend/.env` and `backend/admin.json` with your values.

### Development

```bash
# Frontend (port 8080)
npm run serve

# Backend (port 3000)
cd backend && npm start
```

Dev server proxies `/api` to the backend automatically.

### Build

```bash
npm run build    # output to docs/
```

## Deployment

Server requirements: Nginx, Docker.

### 1. Server directories

```
/var/www/myweb/          # Nginx root (Vue static files + content)
~/codes/Myblog/          # Backend code + Dockerfile
```

### 2. Nginx config

See [nginx.conf](nginx.conf) — add the `/api` proxy block and static file paths to your existing server block.

### 3. Start backend

```bash
# On server
cd ~/codes/Myblog
docker-compose up -d
```

Or use the deploy script from local:

```bash
./deploy.sh              # frontend only
./deploy.sh --backend    # frontend + backend
```

### 4. Sync data (backup from server)

```bash
./sync-data.sh
```

## Project structure

```
├── public/posts/        # Article markdown + images
├── public/tags/         # Tag color map
├── public/blogroll/     # Blogroll links
├── public/profile.json  # Profile card
├── docs/                # Built frontend (deploy to Nginx)
├── backend/             # Express API server
│   ├── admin.json       # Admin credentials (gitignored)
│   └── database.db      # SQLite (view stats)
└── src/                 # Vue 3 source
    ├── views/           # Pages (Postlist, post, Admin*)
    └── components/      # Reusable components
```
