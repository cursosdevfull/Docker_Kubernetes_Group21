# NGINX Personalizado

```bash
docker run -d \
    --name server-web \
    -p 3200:80 \
    -v $(pwd -W)/html:/app:ro \
    -v $(pwd -W)/config/nginx.conf:/etc/nginx/conf.d/default.conf:ro \
    nginx:alpine
```