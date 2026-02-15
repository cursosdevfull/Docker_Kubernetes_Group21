# Segregación de networks

### Crear las redes
```bash
docker network create red-01 -d bridge
docker network create red-02 -d bridge
```

### Crear los contenedores
```bash
docker run -d --name ms01 --network red-01 nginx:alpine
docker run -d --name ms02 --network red-01 --network red-02 nginx:alpine
docker run -d --name database --network red-02 nginx:alpine
```