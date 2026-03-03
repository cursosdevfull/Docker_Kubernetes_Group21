# Pods

### Crear un pod

```bash
kubectl run server-web --image=nginx:alpine
```

### Listar pods

```bash
kubectl get pods
kubectl get po
```

### Port forward

```bash
kubectl port-forward <nombre del pod> <puerto host>:<puerto del pod>
```

### Ejecutar un manifiesto

```bash
kubectl apply -f <nombre del manifiesto>
```
