
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    color: #333;
}


a {
    text-decoration: none;
    color: #403022;
}

ul {
    list-style: none;
}
header {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

header .contenedor {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 70px;
}

header h1 {
    color: #403022;
    font-size: 38px;
}

nav ul {
    display: flex;
    gap: 60px;
}

nav ul li a {
    color: #555;
    font-weight: 510;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: #733036;
}

.carrito-icono {
    position: relative;
    cursor: pointer;
}

.contador-carrito {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: #733036;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}

/* Sección de banner */
.banner{
    width: 100%;
    height: 30vh;
    background: url('../imagenes/portada-tunnel.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
}

/* SECCION ACERCA DE NOSOTROS */
.sobre-nosotros {
    padding: 40px 0;
    background-color: #f1f1f1;
}

.nosotros-contenido {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    align-items: center;
    margin-top: 30px;
    margin: 30px auto 0;
    justify-content: center;
}

.nosotros-texto {
    flex: 1;
    min-width: 300px;
    width: 20%;
}

.nosotros-texto p {
    margin-bottom: 15px;
    font-size: 16px;
    text-align: center;
}

.nosotros-imagen {
    flex: 1;
    min-width: 300px;
    width: 20%;
    height: 40vh;
    background-color: #fff;
    background: url(../imagenes/ACERCA.jpg);
    background-size: cover;
    background-position: center;
}

/* SECCION CATALOGO */
/* ===================== CATÁLOGO ===================== */
h2{
    padding: 20px;
}
.contenedor{
    width: 90%;
    margin: 0 auto;
}

.catalogo-seccion {
    width: 100%;
    background-color: #fcfafa;
    
}

/* Barra de herramientas: buscador + filtro */
.herramientas-catalogo {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 30px;
    align-items: center;
    justify-content: space-between;
}

.buscador {
    display: flex;
    flex: 1;
    max-width: 500px;
}


.buscador input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px 0 0 4px;
    font-size: 16px;
}

.buscador button {
    padding: 10px 15px;
    background-color: #733036;
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    font-size: 16px;
}

.selector-categoria select {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    min-width: 200px;
}

/* footer */
/* ===================== FOOTER ===================== */

footer {
    background-color: #ad9e8fda;
    color: #fff;
    padding: 60px 0 30px;
}

.footer-columnas {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 40px;
}

.footer-columna {
    flex: 1;
    min-width: 250px;
}

.footer-columna h3 {
    color: #000000;
    margin-bottom: 20px;
    font-size: 20px;
}

.footer-columna p {
    color: #000000;
    margin-bottom: 10px;
}

/* Redes sociales */
.redes-sociales {
    display: flex;
    gap: 15px;
    margin-top: 35px;
}

.red-social {
    width: 25px;
    height: 25px;
    color: #000000;
    transition: color 0.3s;
}

.red-social:hover {
    color: #000000;
}

/* Links de navegación */
.footer__link {
    color: #000000;
    text-decoration: none;
    display: block;
    padding: 2px;
}

/* Suscripción */
.footer__subscripcion {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
}

.footer__input {
    background: #ffffff;
    width: 100%;
    font-size: small;
    display: block;
    padding: 5px;
    margin-top: 10px;
    border: 1px solid #ffffff;
}

.suscripcion__enviar {
    background-color: #313B52;
    color: #ffffff;
    border: 1px solid #313B52;
    border-radius: 0px 6px 6px 0px;
    margin-top: 10px;
    padding: 6.1px;
    font-size: small;
    cursor: pointer;
}

/* Copyright */
.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #000000;
}

/* estilos de libros */
/* Productos */
.productos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 25px;
    margin-bottom: 30px;
}

.producto {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.producto:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.producto-imagen {
    height: 400px;
    overflow: hidden;
}

.producto-imagen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.producto:hover .producto-imagen img {
    transform: scale(1.05);
}

.producto-info {
    padding: 15px;
}

.producto-titulo {
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: 500;
}

.producto-autor {
    color: #777;
    margin-bottom: 10px;
    font-size: 14px;
}

.producto-precio {
    font-weight: bold;
    color: #403022;
    margin-bottom: 15px;
    font-size: 18px;
}

.btn {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    border: none;
    text-align: center;
}

.btn-primario {
    background-color: #733036;
    color: white;
}

.btn-primario:hover {
    background-color: #733036;
}

.btn-secundario {
    background-color: #e0e0e0;
    color: #333;
}

.btn-secundario:hover {
    background-color: #c0c0c0;
}

.btn-block {
    display: block;
    width: 100%;
}

.paginacion {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 30px;
}

.pagina {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    color: #333;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    border: 1px solid #ddd;
}

.pagina:hover:not(.activa):not(.desactivado) {
    background-color: #f0f0f0;
}

.pagina.activa {
    background-color: #733036;
    color: white;
    border-color: #733036;
}

.pagina-nav {
    font-weight: bold;
}

.pagina.desactivado {
    opacity: 0.5;
    cursor: not-allowed;
}

.pagina-separador {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    text-align: center;
    font-weight: bold;
    color: #777;
}
