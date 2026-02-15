# Postgres

### Server
```bash
docker run -d --name server-postgres \
    -e POSTGRES_USER=user \
    -e POSTGRES_PASSWORD=12345 \
    -e POSTGRES_DB=cursodev \
    -p 5432:5432 \
    postgres:14.21-alpine3.23
```

### Client
```bash
docker run -d --name client-postgres \
    -e PGADMIN_DEFAULT_EMAIL=sergiohidalgocaceres@gmail.com \
    -e PGADMIN_DEFAULT_PASSWORD=54321 \
    -p 9000:80 \
    dpage/pgadmin4:9.12.0
```