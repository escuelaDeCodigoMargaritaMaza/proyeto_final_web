function imprimirLibros(libros) {
    for (let i = 0; i < libros.length; i++) {
        console.log(`Libro ${i + 1}:`, libros[i]);
    }
}

function imprimirLibros(libros) {
    libros.forEach(libro => {
        console.log("ID:", libro.id);
        console.log("Título:", libro.titulo);
        console.log("Autor:", libro.autor);
        console.log("Precio:", libro.precio);
        console.log("Categoría:", libro.categoria);
        console.log("Stock:", libro.stock);
        console.log("Imagen:", libro.imagen);
        console.log("------------------------");
    });
}
