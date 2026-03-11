# Contextos

### Crear contexto

```bash
kubectl config set-context course21-ctx --user course21 --cluster docker-desktop
```

### Listar contextos

```bash
kubectl config view
```

### Visualizar el contexto actual

```bash
kubectl config current-context
```

### Cambiar de contexto

```bash
kubectl config use-context course21-ctx
```
