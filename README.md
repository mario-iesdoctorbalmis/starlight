# Plantilla Balmis Starlight 
## Requisitos

- Visual Studio Code
- NodeJS (npm)
- d2 (Diagramas)
- Python
- git
- Tener cuenta en github (la del centro es buena opción)


  - copia y pega en PowerShell (como admisnistrador)
```sh
winget install -e --id OpenJS.NodeJS # NPM
winget install -e --id Microsoft.VisualStudioCode # VS code
winget install -e --id Terrastruct.D2 #D2
winget install --id=Python.Python.3.12  -e # Python
winget install --id Git.Git -e --source winget #GIT
```

## 1.- VS Code

 - Abrimos VS code y la carpeta de trabajo
  ![abrir carpeta en vs code](src/assets/manual/vscode%20abrir%20carpeta.png)
 - Abrimos el terminal
  ![abrir terminal en vs code](src/assets/manual/vscode%20terminal.png)

## 2.- Clonar repositorio

Desde el terminal de visual studio clonamos y entramos a la carpeta

```sh
git clone https://github.com/mario-iesdoctorbalmis/starlight miModulo 
# miModulo = el módulo o carpeta de trabajo //Vale cualquier nombre
```
  ![clonación de repo](src/assets/manual/Github%20clone.png)

## GIT y GITHUB
**_Recuerda de estar dentro de la carpeta de trabajo o módulo_**

Desde `consola de VS code` configuramos git
### 1.- Configuración básica de GIT

```sh
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

### 2.- Creamos nuevo repositorio en nuestro espacio de GITHUB
   1. Vamos a la página de [github](https://github.com)
   2. Creamos repositorio nuevo (público o privado)
    ![new repo](src/assets/manual/new%20repository.png)
      1. Resultado:
        ![repo done](src/assets/manual/repository%20created.png)

- Cambiamos los datos del repositorio en el archivo `astro.config.mjs`
```diff lang="js" title="astro.config.mjs"
import { defineConfig } from 'astro/config'

export default defineConfig({
+  site: 'https://aquí_va_tu_usuario.github.io', // cambia esto por tu nombre de usuario de GitHub
+  base: '/miModulo', // cambia esto por el nombre de tu repositorio
})
```

- Añadimos el repositorio en nube. Se usa el **http** ya que el ssh no deja hacer push desde la red de Consellería.
```sh
git remote add origin https://github.com/mario-iesdoctorbalmis/miModulo.git
git branch -M main
git push -u origin main
```

Si fallase el add, usaremos set-url:

```sh
git remote set-url origin https://github.com/mario-iesdoctorbalmis/miModulo.git
git branch -M main
git push -u origin main
 ```

¿Error de Permission denied (publickey)? [Ver solución](#error_github)

<a id="npm"></a>
## Instalar librerías necesarias 

 - Lanzar el comando:
```sh
npm install
```

<a id="npm"></a>
¿No reconoce el comando npm (nodejs)? [Ver solución](#error_npm)

¿Qué hace `npm install`? [Ver explicación](#npm_install)

¿Error con PowerShell al ejecutar npm? [Ver solución](#error_powershell)


## Ejecutar en modo localhost

```sh
npm run dev 
```
![ejecución](src/assets/manual/ejecución_dev.png)

En el navegador abrir la URL: **http://localhost:4321/es**

![home](src/assets/manual/home.png)

- En el **Tema 1** hay apuntes de cómo trabajar con **Astro Starlight**

------------------------
## Posibles errores

<a id="error_github"></a>[Volver a npm](#npm)
### 1.- Error Permission denied (publickey) con github:
![repo done](src/assets/manual/remote_error.png)
Parece que estás teniendo un problema con la clave SSH al intentar acceder a un repositorio de GitHub. Aquí tienes algunos pasos para ayudarte a resolverlo:

**Powershell en modo administrador**

1. **Verifica si tienes claves SSH existentes**:
   Asegúrate de tener un par de claves SSH. Puedes verificarlo ejecutando:
   ```powershell
   ls $env:USERPROFILE\.ssh
   ```
   Si ves archivos como `id_rsa` y `id_rsa.pub`, ya tienes un par de claves SSH.

2. **Genera una nueva clave SSH (si es necesario)**:
   Si no tienes un par de claves SSH, genera una usando:
   ```powershell
   ssh-keygen -t ed25519 -C "tu_correo@example.com"
   ```
   Sigue las indicaciones para guardar la clave en la ubicación predeterminada.

3. **Añade tu clave SSH al agente SSH**:
   Inicia el agente SSH y añade tu clave:
   ```powershell
   Start-Service ssh-agent
   ssh-add $env:USERPROFILE\.ssh\id_ed25519
   ```

4. **Añade la clave SSH a tu cuenta de GitHub**:
   Copia tu clave SSH al portapapeles:
   ```powershell
   Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | Set-Clipboard
   ```
   Luego, ve a GitHub > Settings (Configuración) > SSH and GPG keys > New SSH key (Nueva clave SSH), y pega tu clave.

5. **Prueba tu conexión SSH**:
   Verifica tu conexión a GitHub:
   ```powershell
   ssh -T git@github.com
   ```
   Deberías ver un mensaje de éxito si todo está configurado correctamente:
   `Hi mario-iesdoctorbalmis! You've successfully authenticated, but GitHub does not provide shell access.`

<a id="error_npm"></a>
### NPM en Path

- Verificar que en el PATH esté nodejs "C:\Program Files\nodejs\"

```bash
echo $env:Path
```
 - Añadimos al path en caso de no estár presente la ruta (PowerShell en modo administrador)
```bash
[System.Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Program Files\nodejs\", [System.EnvironmentVariableTarget]::Machine)
# Reiniciar la máquina después
```
<a id="npm_install"></a>[Volver a npm](#npm)
> [!NOTE]
> #### ¿Qué hace `npm install`?
> 1. **Instala dependencias**:
>    - Cuando ejecutas `npm install` en el directorio > raíz de tu proyecto, Node Package Manager (npm) lee > el archivo `package.json` y descarga todas las > dependencias listadas en la sección `dependencies` > y `devDependencies`.
> 
> 2. **Crea la carpeta `node_modules`**:
>    - Las dependencias descargadas se almacenan en una > carpeta llamada `node_modules` dentro del > directorio de tu proyecto.
> 
> 3. **Genera o actualiza el archivo `package-lock.> json`**:
>    - Este archivo contiene una lista detallada de las > versiones exactas de cada paquete instalado, > asegurando que las mismas versiones se instalen en > cualquier entorno donde se ejecute `npm install`.
> 
> #### Ejemplo
> 
> Supongamos que tienes un archivo `package.json` con el > siguiente contenido:
> 
> ```json
> {
>   "name": "mi-proyecto",
>   "version": "1.0.0",
>   "dependencies": {
>     "express": "^4.17.1"
>   },
>   "devDependencies": {
>     "nodemon": "^2.0.7"
>   }
> }
> ```
> 
> Al ejecutar `npm install`, npm descargará e instalará > `express` y `nodemon` en la carpeta `node_modules`.
> 


<a id="error_powershell"></a>[Volver a npm](#npm)
### Error Powershell, sin permisos de ejecución
  - Si da error de PowerShell prueba con el siguiente [manual](https://rogamainformatica.es/npm-ejecucion-scripts-deshabilitada-sistema/)
  1. Ejecuta Powershell como administrador
  2. Lanza el siguiente comando `Set-ExecutionPolicy Unrestricted`
  3. vuelve a VS Code e intenta de nuevo

 - Otro posible error en VirtualBox con npm es `⠹Assertion failed: new_time >= loop->time, file c:\ws\deps\uv\src\win\core.c, line 327`. 
   - No hace bien la sincronización de fecha y hora
   - Ve a Sistema > Placa base y asegúrate de que la opción Habilitar reloj de hardware UTC esté marcada.
