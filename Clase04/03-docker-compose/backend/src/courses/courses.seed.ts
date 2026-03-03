import { Course } from './course.entity';

export const COURSES_SEED: Partial<Course>[] = [
  {
    title: 'Docker desde cero',
    description:
      'Aprende a contenerizar aplicaciones con Docker, desde los conceptos básicos hasta el despliegue en producción.',
    instructor: 'Carlos Mendoza',
    price: 29.99,
    duration: 12,
    level: 'Principiante',
    category: 'DevOps',
    imageUrl: 'https://picsum.photos/seed/docker/400/300',
  },
  {
    title: 'Kubernetes para desarrolladores',
    description:
      'Orquesta contenedores con Kubernetes, aprende Pods, Deployments, Services e Ingress controllers.',
    instructor: 'Ana García',
    price: 49.99,
    duration: 20,
    level: 'Intermedio',
    category: 'DevOps',
    imageUrl: 'https://picsum.photos/seed/k8s/400/300',
  },
  {
    title: 'NestJS: API REST completa',
    description:
      'Construye APIs escalables con NestJS, TypeORM, autenticación JWT y documentación Swagger.',
    instructor: 'Luis Torres',
    price: 39.99,
    duration: 18,
    level: 'Intermedio',
    category: 'Backend',
    imageUrl: 'https://picsum.photos/seed/nest/400/300',
  },
  {
    title: 'React 18 con TypeScript',
    description:
      'Crea interfaces modernas con React 18, hooks avanzados, Context API y TypeScript.',
    instructor: 'María López',
    price: 34.99,
    duration: 22,
    level: 'Intermedio',
    category: 'Frontend',
    imageUrl: 'https://picsum.photos/seed/react/400/300',
  },
  {
    title: 'Node.js y Express: Fundamentos',
    description:
      'Domina el desarrollo backend con Node.js y Express, middlewares, rutas y conexión a bases de datos.',
    instructor: 'Pedro Ramírez',
    price: 24.99,
    duration: 14,
    level: 'Principiante',
    category: 'Backend',
    imageUrl: 'https://picsum.photos/seed/node/400/300',
  },
  {
    title: 'Python para Data Science',
    description:
      'Introducción a la ciencia de datos con Python, NumPy, Pandas y visualización con Matplotlib.',
    instructor: 'Sofia Chen',
    price: 44.99,
    duration: 30,
    level: 'Principiante',
    category: 'Data Science',
    imageUrl: 'https://picsum.photos/seed/python/400/300',
  },
  {
    title: 'CI/CD con GitHub Actions',
    description:
      'Automatiza pipelines de integración y entrega continua usando GitHub Actions con Docker.',
    instructor: 'Roberto Silva',
    price: 29.99,
    duration: 10,
    level: 'Intermedio',
    category: 'DevOps',
    imageUrl: 'https://picsum.photos/seed/cicd/400/300',
  },
  {
    title: 'Angular 17: Aplicaciones empresariales',
    description:
      'Desarrolla aplicaciones robustas con Angular 17, Signals, módulos lazy loading y RxJS.',
    instructor: 'Elena Morales',
    price: 49.99,
    duration: 25,
    level: 'Avanzado',
    category: 'Frontend',
    imageUrl: 'https://picsum.photos/seed/angular/400/300',
  },
  {
    title: 'MySQL: Optimización y rendimiento',
    description:
      'Aprende indexación, consultas optimizadas, particionado y tuning de MySQL en producción.',
    instructor: 'Jorge Castillo',
    price: 39.99,
    duration: 16,
    level: 'Avanzado',
    category: 'Bases de Datos',
    imageUrl: 'https://picsum.photos/seed/mysql/400/300',
  },
  {
    title: 'Vue 3 con Composition API',
    description:
      'Construye SPAs modernas con Vue 3, Composition API, Pinia y Vue Router.',
    instructor: 'Carmen Vega',
    price: 32.99,
    duration: 18,
    level: 'Intermedio',
    category: 'Frontend',
    imageUrl: 'https://picsum.photos/seed/vue/400/300',
  },
  {
    title: 'Microservicios con NestJS',
    description:
      'Diseña e implementa arquitecturas de microservicios usando NestJS, NATS y RabbitMQ.',
    instructor: 'Diego Fernández',
    price: 59.99,
    duration: 28,
    level: 'Avanzado',
    category: 'Backend',
    imageUrl: 'https://picsum.photos/seed/micro/400/300',
  },
  {
    title: 'AWS para desarrolladores',
    description:
      'Despliega aplicaciones en AWS usando EC2, S3, RDS, Lambda y CloudFormation.',
    instructor: 'Valentina Cruz',
    price: 54.99,
    duration: 24,
    level: 'Intermedio',
    category: 'Cloud',
    imageUrl: 'https://picsum.photos/seed/aws/400/300',
  },
  {
    title: 'TypeScript avanzado',
    description:
      'Domina los tipos avanzados de TypeScript: generics, decoradores, utility types y patrones de diseño.',
    instructor: 'Andrés Ruiz',
    price: 34.99,
    duration: 15,
    level: 'Avanzado',
    category: 'Programación',
    imageUrl: 'https://picsum.photos/seed/ts/400/300',
  },
  {
    title: 'GraphQL con Apollo Server',
    description:
      'Crea APIs GraphQL con Apollo Server, schemas, resolvers, mutations y suscripciones en tiempo real.',
    instructor: 'Isabel Navarro',
    price: 42.99,
    duration: 17,
    level: 'Intermedio',
    category: 'Backend',
    imageUrl: 'https://picsum.photos/seed/graphql/400/300',
  },
  {
    title: 'MongoDB y Mongoose',
    description:
      'Aprende bases de datos NoSQL con MongoDB, modelado de datos con Mongoose y agregaciones.',
    instructor: 'Tomás Herrera',
    price: 27.99,
    duration: 13,
    level: 'Principiante',
    category: 'Bases de Datos',
    imageUrl: 'https://picsum.photos/seed/mongo/400/300',
  },
  {
    title: 'Linux para administradores',
    description:
      'Domina la administración de servidores Linux, shell scripting, procesos y gestión de usuarios.',
    instructor: 'Pablo Aguilar',
    price: 29.99,
    duration: 20,
    level: 'Intermedio',
    category: 'Sistemas',
    imageUrl: 'https://picsum.photos/seed/linux/400/300',
  },
  {
    title: 'Redis: Caché y mensajería',
    description:
      'Implementa caché de alto rendimiento y sistemas de mensajería con Redis y Node.js.',
    instructor: 'Laura Jiménez',
    price: 24.99,
    duration: 9,
    level: 'Intermedio',
    category: 'Backend',
    imageUrl: 'https://picsum.photos/seed/redis/400/300',
  },
  {
    title: 'Next.js 14: Full Stack React',
    description:
      'Desarrolla aplicaciones full stack con Next.js 14, App Router, Server Components y Prisma.',
    instructor: 'Miguel Santos',
    price: 47.99,
    duration: 26,
    level: 'Intermedio',
    category: 'Frontend',
    imageUrl: 'https://picsum.photos/seed/nextjs/400/300',
  },
  {
    title: 'Terraform: Infraestructura como código',
    description:
      'Provea infraestructura cloud con Terraform en AWS, variables, módulos y workspaces.',
    instructor: 'Natalia Reyes',
    price: 52.99,
    duration: 22,
    level: 'Avanzado',
    category: 'DevOps',
    imageUrl: 'https://picsum.photos/seed/terraform/400/300',
  },
  {
    title: 'Svelte: Interfaces reactivas',
    description:
      'Crea aplicaciones web ultrarrápidas con Svelte, stores, animaciones y SvelteKit.',
    instructor: 'Francisco Rojas',
    price: 31.99,
    duration: 14,
    level: 'Principiante',
    category: 'Frontend',
    imageUrl: 'https://picsum.photos/seed/svelte/400/300',
  },
];
