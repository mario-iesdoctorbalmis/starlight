# Plantilla Balmis Starlight 
## Requisitos

- Visual Studio Code
- NodeJS (npm)
- d2 (Diagramas)
- Python
- git
- Tener cuenta en github (la del centro es buena opción)


**Instalar todos a la vez**
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

Desde el terminal de visual studio

```sh
git clone https://github.com/mario-iesdoctorbalmis/starlight nombre_de_la_carpeta 
# nombre_de_la_carpeta = el módulo o carpeta de trabajo ej. bbdd
```
  ![clonación de repo](src/assets/manual/Github%20clone.png)

## Instalar librerías
1. Acceder a la carpeta de trabajo (nombre_de_la_carpeta)
2. Lanzar el comando:
```sh
npm install
```
  - Si da error, sigue el siguiente [manual](https://rogamainformatica.es/npm-ejecucion-scripts-deshabilitada-sistema/)
  1. Ejecuta Powershell como administrador
  2. Lanza el siguiente comando `Set-ExecutionPolicy Unrestricted`
  3. vuelve a VS Code e intenta de nuevo

## GITHUB
1. Vamos a la página de [github](https://github.com)
2. Creamos repositorio nuevo
3. 
## GIT y GITHUB

### Configuración básica de GIT



Desde `consola de VS code` configuramos git

```sh
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

```sh
git remote add origin git@github.com:mario-iesdoctorbalmis/starlight.git
git branch -M main
git push -u origin main
```