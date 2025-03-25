# Plantilla Balmis Starlight 
## Requisitos

- Visual Studio Code
- NodeJS (npm)
- d2 (Diagramas)
- git
- Tener cuenta en github (la del centro es buena opción)


**Instalar todos a la vez**
  - copia y pega en PowerShell (como admisnistrador)
```sh
winget install -e --id Microsoft.VisualStudioCode # VS code
winget install -e --id OpenJS.NodeJS # NPM
winget install -e --id Terrastruct.D2 #D2
winget install --id Git.Git -e --source winget #GIT
```

## 1.- VS Code

 - Abrimos VS code y la carpeta de trabajo
  ![abrir carpeta en vs code](src/assets/manual/vscode%20abrir%20carpeta.png)
 - Abrimos el terminal
  ![abrir terminal en vs code](src/assets/manual/vscode%20terminal.png)

## 2.- Clonar repositorio

Desde el terminal de visual studio

```sh
git clone https://github.com/mario-iesdoctorbalmis/starlight
```
  ![clonación de repo](src/assets/manual/Github%20clone.png)

## Instalar librerías
1. Reiniciar VS code
2. Acceder a la carpeta de trabajo (repositorio clonado)
3. Lanzar el comando:
```sh
npm install
```


## GIT
### Configuración básica

desde git bash (acabamos de instalarlo) o desde consola de VS code

```sh
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```


## Descargar plantilla para empezar


## Subir repositorio a github

**desde la web de github**
Creamos un nuevo repositorio en https://github.com. Le damos nombre, descripción, seleccionamos si va a ser un proyecto publico o privado si es el caso, y dejamos el check de crear README sin marcar. Le damos a crear repositorio y con esto ya tenemos el repositorio donde alojaremos nuestro proyecto.

desde la terminal del equipo donde esta el proyecto que queremos subir a github
Nos vamos a la carpeta del proyecto y ejecutamos estos comandos.

```sh
git remote add origin git@github.com:mario-iesdoctorbalmis/starlight.git
git branch -M main
git push -u origin main
```