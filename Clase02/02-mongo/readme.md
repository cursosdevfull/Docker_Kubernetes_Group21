# MongoDB

### Server
```bash
docker run -d --name server-mongo \
    -e MONGO_INITDB_ROOT_USERNAME=user \
    -e MONGO_INITDB_ROOT_PASSWORD=12345 \
    -p 27017:27017 \
    mongo:8.2-noble
```

### Client
```bash
docker run -d --name client-mongo \
    -p 3000:3000 \
    dbgate/dbgate:alpine
```