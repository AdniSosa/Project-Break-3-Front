**************************************CENTRO DE ESTÉTICA********************************************************
![Logo tienda de ropa](https://res.cloudinary.com/dljpuje5r/image/upload/v1745252932/Tova_cn1yyn.png)


## ÍNDICE
*[Descripción del proyecto](#Descripción-del-proyecto)
*[Funcionalidades del proyecto](#Funcionalidades-del-proyecto)
*[Tecnologías utilizadas](#Tecnologías-utilizadas)
*[Características de archivos](#Características-de-los-archivos)
*[Base de datos](#Base-de-datos)
*[Servidor](#Servidor)
*[Modelos](#Modelos)
*[Rutas](#Rutas)
*[Controladores](#Controladores)
*[Despliegue](#Despliegue)
*[Firebase](#Firebase)
*[Autores](#Autores)

## Descripción del proyecto
Proyecto realizado como requisito del Bootcamp Full Stack Developer de The Bridge. Centro de estética, donde los usuarios pueden agendar citas online y también dispone de una pasarela de pago para la compra de tarjetas regalo. A los administradores de la tienda, les permite crear un usuario e iniciar sesión para poder gestionar los productos: crear, editar o borrar cualquier artículo.

## Funcionalidades del proyecto
- `Registro de usuarios`: Permite el registro de usuarios para los administradores de la tienda online. Requiere de correo electrónico y contraseña (min. 6 caracteres).
- `Inicio de sesión de usuarios`: Al iniciar sesión, el administrador podrá realizar funciones, como crear, editar o borrar un servicio.
- `Clasificación de los tratamientos por categoría`: Permite una visión rápida de todos los tratamientos organizados por categorías: faciales y corporales.
- `Ver detalles del servicio`: Permite visualizar todos los detalles del servicio haciendo click en "ver".
- `Creación de nuevo servicio`: Permite crear un nuevo producto, introduciendo valores como titulo, descripción, duración categoría, precio y url de la imágen. Para esta funcionalidad debe haber realizado inicio de sesión.
- `Editar un servicio`: Permite editar todos los campos rellenados en la creación del servicio. Para esta funcionalidad debe haber realizado inicio de sesión.
- `Borrar un servicio`: Borra cualquier servicio. Para esta funcionalidad debe haber realizado inicio de sesión.
- `Reserva`: Permite a los usuarios seleccionar fecha y hora para agendar un servicio de forma sencilla.
- `Regala TOVA`: Opción para adquirir tarjetas regalo a través de una pasarela de pago segura.
- `Contacto`: Canal directo para que los usuarios puedan realizar consultas o solicitar información personalizada.

## Tecnologías utilizadas

### Frontend:
- **React.js** – Biblioteca de JavaScript para construir interfaces interactivas.
- **React Router DOM** – Manejo de rutas.
- **Vite** – Herramienta de desarrollo rápida para aplicaciones frontend.
- **Axios** – Cliente HTTP para consumir APIs.
- **EmailJS** – Servicio para el envío de correos desde el frontend sin necesidad de backend.
- **React Datepicker** – Componente para selección de fechas en formularios.
- **FontAwesome** – Íconos vectoriales escalables.
- **Firebase** – Autenticación y otros servicios en la nube (si se está utilizando activamente).
- **Stripe** – Pasarela de pago para tarjetas regalo

### Backend:
- **Node.js** – Entorno de ejecución para JavaScript en el servidor.
- **Express.js** – Framework minimalista para crear la API REST.
- **MongoDB** – Base de datos NoSQL.
- **Mongoose** – ODM que facilita la interacción con MongoDB desde Node.js.
- **Firebase Admin SDK** – Permite validar tokens y gestionar usuarios desde el backend.
- **dotenv** – Carga de variables de entorno desde un archivo `.env`.
- **cors** – Middleware para habilitar el intercambio de recursos entre distintos orígenes.
- **cookie-parser** – Middleware para manejar cookies en peticiones HTTP.


****************************************CARACTERÍSTICAS ARCHIVOS**************************************************
### Frontend:
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







### controlllers
- controllers/authControllers.js: Archivo que contiene la configuración de firebase y la lógica para manejar tanto la creación de usuario, como el registro, inicio y cierre de sesión del administrador utilizando Firebase. Devuelve las respuestas en formato HTML.
- controllers/productController.js: Archivo que contiene la lógica para manejar las solicitudes CRUD de los productos. Devuelve las respuestas en formato HTML.

### middlewares
- middlewares/authMiddleware.js: Archivo que contiene el middleware para comprobar si el usuario está autenticado. Este busca la sesión del usuario y, si no la encuentra, redirige al formulario de login.

### models
- models/.js: Archivo que contiene la definición del esquema del servicio utilizando Mongoose.


### routes
- routes/productRoutes.js: Archivo que contiene la definición de las rutas CRUD para los productos. Este llama a los métodos del controlador.
- routes/authRoutes.js: Archivo que contiene la definición de las rutas para la autenticación. Este llama a los métodos del controlador.

### index.js
- index.js: Archivo principal que inicia el servidor Express. Importa las rutas y las usa. También tiene configurado para servir archivos estáticos y para leer el body de las peticiones de formularios.

- .env: Archivo que contendrá las variables de entorno. 

### 📄package.json
- package.json: Archivo que contendrá las dependencias del proyecto. Se debe hacer ```npm i``` para instalar todas las dependencias necesarias para que el proyecto funcione. (npm start)























# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
