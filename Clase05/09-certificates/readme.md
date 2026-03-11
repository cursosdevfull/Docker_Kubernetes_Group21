# Certificados

### Certificado o llave privada

```bash
openssl genrsa -out course21.key 2048
```

### Generar solicitud

```bash
openssl req -new -key course21.key -out course21.csr -subj "/CN=course21/O=developers"
```

### Generar certificado final

```bash
openssl x509 -req -in course21.csr -CA \\wsl.localhost\docker-desktop\tmp\docker-desktop-root\run\config\pki\ca.crt -CAkey \\wsl.localhost\docker-desktop\tmp\docker-desktop-root\run\config\pki\ca.key -CAcreateserial -out course21.crt --days 365
```
