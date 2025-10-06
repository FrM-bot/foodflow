# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Docker y Docker Compose

Este proyecto incluye un `Dockerfile` multi-stage y un `docker-compose.yml` con servicios para producción y desarrollo.

### Requisitos

- Docker Desktop 4.x o superior
- Docker Compose v2 (incluido en Docker Desktop)

### Variables de entorno

- Crea un archivo `.env` en la raíz del proyecto con las variables que comienzan con `VITE_`, por ejemplo:

```bash
VITE_BASE_SERVER_URL=https://api.tu-servidor.com
```

El `docker-compose.yml` ya referencia este `.env`.

---

### Producción (Nginx sirviendo `dist/`)

Usa el target `production` del `Dockerfile`.

Con Docker Compose (recomendado):

```bash
docker compose up -d --build
```

Con Docker directamente:

```bash
docker build -t frontend-app --target production .
docker run -d -p 80:80 --name frontend-app frontend-app
```

Ver logs:

```bash
docker compose logs -f
```

Parar y limpiar el stack:

```bash
docker compose down
```

---

### Desarrollo (Vite preview en 4173)

Usa el servicio `web-dev` bajo el perfil `dev`. Monta el código y expone `4173`.

```bash
docker compose --profile dev up --build
```

Luego abre:

```bash
http://localhost:4173
```

Parar el servicio de dev:

```bash
docker compose --profile dev down
```

Nota: El comando de inicio en dev es `pnpm preview -- --host 0.0.0.0 --port 4173` para escuchar desde el contenedor.

---

### Comandos útiles

- Detener contenedores del stack actual:

```bash
docker compose down
```

- Detener todos los contenedores (PowerShell):

```powershell
docker ps -q | % { docker stop $_ }
```

- Limpiar contenedores detenidos e imágenes sin usar:

```bash
docker container prune -f
docker image prune -f
```

---

### Estructura de Docker

- `Dockerfile`:
  - Stage `build`: usa `node:24-alpine`, habilita `pnpm` con `corepack`, instala con `pnpm install --frozen-lockfile` y ejecuta `pnpm build`.
  - Stage `production`: usa `nginx:alpine` para servir `/usr/share/nginx/html` con el contenido de `dist/`.
  - Stage `development`: ejecuta `pnpm preview` en `4173`.

- `docker-compose.yml`:
  - Servicio `web` (producción por defecto): target `production`, expone `80:80`.
  - Servicio `web-dev` (perfil `dev`): target `development`, expone `4173:4173`, monta el código y mantiene `node_modules` dentro del contenedor.

---

### CI/CD (GitHub Actions)

El workflow en `.github/workflows/deploy.yaml`:

- Genera un `.env` con variables `VITE_`.
- Copia `.env` a la instancia EC2.
- Clona el repositorio en la rama de despliegue y ejecuta:

```bash
docker compose down || true
docker compose up -d --build
```

Esto usa el servicio por defecto de `docker-compose.yml` (producción).

---

### Solución de problemas

- Si ves `exec format error` durante el build, asegúrate de que el `Dockerfile` usa `pnpm` (ya configurado) y que no exista un script `install` en `package.json` que requiera `npm`.
- Si ejecutas en Windows, evita CRLF en scripts de shell dentro del contenedor. Puedes normalizar finales de línea con `.gitattributes`.
- Revisa que `pnpm-lock.yaml` esté presente para builds determinísticos y buen cacheo de capas.
