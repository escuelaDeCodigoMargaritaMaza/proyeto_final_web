// Variables globales
let librosFiltrados = [...libros];

// Elementos del DOM
let productosContenedor;

// Inicializar sistema
document.addEventListener('DOMContentLoaded', () => {
    productosContenedor = document.getElementById('productos');
    cargarProductos();
});

// Función para cargar los productos en el catálogo
function cargarProductos() {
    productosContenedor.innerHTML = librosFiltrados
        .map(libro => generarProductoHTML(libro))
        .join('');
}

// Generar cards para un producto
function generarProductoHTML(libro) {
    return `
        <div class="producto">
            <div class="producto-imagen">
                <img src="${libro.imagen}" alt="${libro.titulo}">
            </div>
            <div class="producto-info">
                <h3 class="producto-titulo">${libro.titulo}</h3>
                <p class="producto-autor">${libro.autor}</p>
                <p class="producto-precio">$${libro.precio.toFixed(2)}</p>
                <button class="btn btn-primario btn-block agregar-carrito" data-id="${libro.id}">
                    Agregar al carrito
                </button>
            </div>
        </div>
    `;
}
