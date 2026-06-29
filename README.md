# INFONIX Repository

INFONIX es una plataforma de presupuestación interactiva orientada a la ingeniería de software; el sistema se estructura bajo una arquitectura modular en Next.js, priorizando así el desacoplamiento de componentes y la estandarización del flujo de trabajo en el ciclo de vida de desarrollo.

## Arquitectura y estructura

El proyecto se adhiere a un patrón de composición de componentes dentro del directorio `src/`. La separación de responsabilidades se define de la siguiente manera:

* `/app`: Capa de enrutamiento y definición de layouts
* `/components`: Bloques funcionales divididos por dominio (dashboard, marketing, ui)
* `/lib`: Lógica compartida, utilidades y configuración de rutas
* `/fonts`: Gestión de tipografía local para optimización de rendimiento (evitando dependencias externas)

## Flujo de trabajo (Git Workflow)

Para mantener la integridad del repositorio y el desarrollo paralelo, se ha implementado una estrategia de ramas basada en Git Flow:

* `main`: Rama de despliegue productivo. Solo recibe fusiones validadas mediante Pull Requests
* `develop`: Rama de integración para el desarrollo activo
* `feature/*`: Ramas temporales destinadas a la implementación de funcionalidades específicas


## Configuración del entorno

### Requisitos técnicos
- Node.js v18.0.0 o superior
- Gestor de paquetes npm o pnpm

### Instalación y ejecución (por ahora).
1. Clonar el repositorio
2. Instalar dependencias mediante `npm install`
3. Iniciar el entorno de desarrollo con `npm run dev`

## Normas de contribución

Todo nuevo desarrollo debe ser aislado en una rama `feature/` y validado antes de ser integrado en `develop`, no se van a permitir cambios directos en `main` bajo ninguna circunstancia, la consistencia del código debe mantenerse mediante el uso estricto del archivo `.gitignore` configurado para excluir dependencias y archivos de compilación temporales
