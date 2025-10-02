let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({nombre, precio});
    total += precio;
    mostrarCarrito();
}

function mostrarCarrito() {
    const lista = document.getElementById('lista-carrito');
    lista.innerHTML = '';
    carrito.forEach((item, index) => {
        lista.innerHTML += `<li>${item.nombre} - $${item.precio} MXN <button onclick="eliminarDelCarrito(${index})">Eliminar</button></li>`;
    });
    document.getElementById('total').textContent = total;
    document.getElementById('paypal-amount').value = total;
}

function eliminarDelCarrito(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    mostrarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    total = 0;
    mostrarCarrito();
}


