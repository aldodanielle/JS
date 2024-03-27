// ------------------ Autofix con ESLint ------------------
// Una de las características más interesantes de ESLint, es utilizar la característica autofix, 
// es decir, que ESLint se encargue de corregir los errores automáticamente
$ npx eslint --fix src/js/index.js



Paso 1: Configurar ESLint con el asistente o el fichero de configuración (visto anteriormente)
Paso 2: Instalar el plugin ESLint en VSCode
Paso 3: Añadir las siguientes líneas de configuración en VSCode, pulsando F1 y seleccionando 
Settings (JSON):

            /* ... */
            "editor.codeActionsOnSave": {
                "source.fixAll.eslint": true
            },
            /* ... */

