**************************************CENTRO DE ESTÉTICA********************************************************
![Logo centro de estética](https://res.cloudinary.com/dljpuje5r/image/upload/v1745252932/Tova_cn1yyn.png)


## ÍNDICE
*[Descripción del proyecto](#Descripción-del-proyecto)
*[Funcionalidades del proyecto](#Funcionalidades-del-proyecto)
*[Tecnologías utilizadas](#Tecnologías-utilizadas)
*[Características de archivos](#Características-de-los-archivos)
*[Servidor](#Servidor)
*[Despliegue](#Despliegue)
*[Autores](#Autores)

## Descripción del proyecto
Proyecto realizado como requisito del Bootcamp Full Stack Developer de The Bridge. Centro de estética, donde los usuarios pueden agendar citas online y también dispone de una pasarela de pago para la compra de tarjetas regalo. A los administradores de la estética, les permite crear un usuario e iniciar sesión, ya sea con correo y contraseña, o con una cuenta de Google. Ya inciados sesión, los administradores podrán gestionar los servicios: crear, editar o borrar cualquier artículo, además de visualizar todas las citas agendadas por los clientes.

## Funcionalidades del proyecto

### Funcionalidades para el usuario

Estas son las funcionalidades de las que el usuario de la página web podrá hacer uso:

- `Clasificación de los tratamientos por categoría`: Permite una visión rápida de todos los tratamientos organizados por categorías: faciales y corporales.
- `Ver detalles del servicio`: Permite visualizar todos los detalles del servicio haciendo click en "Más información".
- `Reserva`: Permite a los usuarios seleccionar fecha y hora para agendar un servicio de forma sencilla.
- `Regala TOVA`: Opción para adquirir tarjetas regalo a través de una pasarela de pago segura.
- `Contacto`: Canal directo para que los usuarios puedan realizar consultas o solicitar información personalizada.

### Funcionalidades para el administrador

Además de las funcionalidades del usuario, el administrador podrá hacer uso de estas funcionalidades: 

- `Registro de usuarios`: Permite el registro de usuarios para los administradores de la tienda online. Requiere de correo electrónico y contraseña (min. 6 caracteres).
- `Inicio de sesión de usuarios`: Inicio de sesión con correo y contraseña utilizados en el resgistro, o con una cuenta de Google. Al iniciar sesión, el administrador podrá realizar funciones, como crear, editar o borrar un servicio.
- `Creación de nuevo servicio`: Permite crear un nuevo producto, introduciendo valores como titulo, descripción, duración, categoría, precio y url de la imágen. Para esta funcionalidad debe haber realizado inicio de sesión.
- `Editar un servicio`: Permite editar todos los campos rellenados en la creación del servicio. Para esta funcionalidad debe haber realizado inicio de sesión.
- `Borrar un servicio`: Borra cualquier servicio. Para esta funcionalidad debe haber realizado inicio de sesión.
- `Visualización de citas reservadas`: Ver las citas reservadas eligiendo el día en el calendario. Los días con citas reservadas se podrán ver resaltadas en el calendario.

****************************************TECNOLOGÍAS UTILIZADAS**************************************************
## Tecnologías utilizadas

- **React.js** – Biblioteca de JavaScript para construir interfaces interactivas.
- **React Router DOM** – Manejo de rutas.
- **Vite** – Herramienta de desarrollo rápida para aplicaciones frontend.
- **EmailJS** – Servicio para el envío de correos desde el frontend sin necesidad de backend.
- **React Datepicker** – Componente para selección de fechas en formularios.
- **FontAwesome** – Íconos vectoriales escalables.
- **Firebase** – Autenticación y otros servicios en la nube (si se está utilizando activamente).
- **Stripe** – Pasarela de pago para tarjetas regalo


****************************************CARACTERÍSTICAS ARCHIVOS**************************************************
## Característica de los archivos

### 📁 components
- Contiene componentes reutilizables de la interfaz de usuario, como botones, formularios, navbar, footer, entre otros. Cada componente está diseñado para ser modular y fácil de integrar en distintas vistas o páginas de la aplicación.

### 📁 config
- config/db.js: Archivo que contendrá la configuración de la base de datos. Deberá conectarse a la base de datos de mongo en Atlas.
-config/firebase.js: Archivo donde se guarda la clave privada generada en la configuración del proyecto en la plataforma Firebase.

### 📁 contexts
- Guarda los datos del usuario que está logueado (como su email, o si tiene sesión activa) para que cualquier parte de la app pueda usarlos fácilmente `UserLoggedContext`.

### 📁 hooks
- Permite acceder fácilmente a la información del usuario que ha iniciado sesión, usando el contexto `UserLoggedContext`.

### 📁 pages
- Contiene los componentes principales de cada pantalla o vista de la aplicación tales como Inicio, Contacto, Login, etc.

### 📁 styles
- Contiene archivos `.module.css` que se usan para dar estilos a los componentes de forma local y organizada.  
Con **CSS Modules**, cada clase definida en estos archivos solo se aplica al componente que la importa.

### 📄 App.jsx
- Donde se renderiza toda la estructura de la app y se configuran las rutas principales.

### 📄 Main.jsx
- Archivo de entrada de la aplicación, donde se monta el componente raíz (`App`) en el DOM.  

### 📄package.json
- package.json: Archivo que contendrá las dependencias del proyecto. Se debe hacer ```npm i``` para instalar todas las dependencias necesarias para que el proyecto funcione. (npm run dev)


**********************************************SERVIDOR***********************************************
## Servidor

- Levantamos el servidor npm run dev  y por defecto corre en http://localhost:5173.


**********************************************DESPLIEGUE***********************************************
## Despliegue

https://esteticatova.netlify.app/

**********************************************FIREBASE***********************************************

## Firebase

Utilizamos Firebase para la autenticación del administrador o administradores del sitio web. 

Se usa la librería firebase para registrar usuario e iniciar sesión con correo electrónico y contraseña. 
También nos da la opción de realizar inicio de sesión con Google, sin necesidad de realizar un registro.

Al iniciar sesión se genera un token único para cada usuario, esto permite que el usuario, o en este caso, 
el administrador, solo haga inicio de sesión 1 vez cada cierto tiempo. 

Este token se envía al backend para su verificación y así dar acceso o no a los endpoints de administrador.



************************************************AUTORES*************************************************
## Autores

[Adni Sosa](https://github.com/AdniSosa)  | [Mariana Lobeto](https://github.com/MarianaLGM)




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
