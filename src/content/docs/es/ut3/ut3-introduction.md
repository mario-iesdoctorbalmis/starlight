---
title: Actualización dependencias y comandos útiles
sidebar:
  label: Updates
  order: 2
---

# Actualización dependencias y comandos útiles

:::danger[warning]
Recuerda estar dentro de la carpeta del proyecto
:::  

```bash
npm update #actualiza las dependencias
```

## Si quieres actualizar a la última versión de las dependencias
```bash	
ncu -u #actualiza las dependencias a la última versión
# si no tienes ncu, instala el paquete de Node.js
npm install -g npm-check-updates

npm install #vuelve a instalar las dependencias
```

```bash	
npm audit fix #repara las vulnerabilidades
npm audit fix --force #repara las vulnerabilidades forzando la actualización
```

```bash	
# Otros comandos útiles
npm run build #vuelve a compilar el proyecto  
npm run dev #vuelve a iniciar el proyecto en modo desarrollo
```

## Consejos útiles


:::caution[Consejos]
- Actualizar las dependencias puede romper el proyecto, por lo que es recomendable:
  - Probar el proyecto después de la actualización para asegurarse de que todo funciona correctamente.
- Mejor subir a web publica una rama alternativa a la rama `main`. Ej: `web`
- Si tienes problemas con las dependencias, puedes eliminar la carpeta `node_modules` y el archivo `package-lock.json`, y luego ejecutar `npm install` para reinstalar todas las dependencias desde cero.
:::