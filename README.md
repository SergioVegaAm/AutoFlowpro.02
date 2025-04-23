# AutoFlowPro

Automatización visual de flujos de trabajo con Next.js 14, Tailwind CSS y TypeScript.

## 🚀 Características

- ⚡ Next.js 14 con App Router
- 🎨 Tailwind CSS para estilos
- 🌙 Modo oscuro/claro con next-themes
- 🔔 Notificaciones modernas con Sonner
- 💡 Tooltips con Radix UI
- 📱 Diseño responsive
- ✨ Interfaz moderna y minimalista

## 📦 Instalación

### Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/SergioVegaAm/AutoFlowpro.02.git

# Navegar al directorio
cd AutoFlowpro.02

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Despliegue en Replit

1. Ve a [Replit](https://replit.com)
2. Crea un nuevo repl
3. Selecciona "Import from GitHub"
4. Pega la URL: `https://github.com/SergioVegaAm/AutoFlowpro.02.git`
5. Haz clic en "Import from GitHub"
6. Una vez importado, en la consola ejecuta:
   ```bash
   npm install
   npm run dev
   ```
7. Haz clic en el botón "Run" ▶️

### Actualizar en Replit

Para obtener la última versión del código:

1. Abre la consola en Replit
2. Ejecuta:
   ```bash
   git pull origin main
   npm install
   npm run dev
   ```

## 🛠️ Tecnologías

- [Next.js 14](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sonner](https://sonner.emilkowal.ski/)
- [Radix UI](https://www.radix-ui.com/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## 📁 Estructura del Proyecto

```
src/
├── app/                   # App Router de Next.js
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Página principal
├── components/           # Componentes React
│   ├── theme-provider.tsx # Proveedor de temas
│   └── ui/              # Componentes de UI
│       ├── tooltip.tsx   # Componente Tooltip
│       └── toaster.tsx   # Componente Toaster
└── lib/                 # Utilidades y helpers
    └── utils.ts         # Funciones de utilidad
```

## 🤝 Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

## 👤 Autor

Sergio Vega
- GitHub: [@SergioVegaAm](https://github.com/SergioVegaAm)
