let carrito = [];

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    let listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.producto} - $${item.precio}`;
        listaCarrito.appendChild(li);
        total += item.precio;
    });

    document.getElementById("total").textContent = total.toFixed(2);
}

function generarRecibo() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let detalleRecibo = carrito.map(item => `${item.producto} - $${item.precio}`).join("\n");
    document.getElementById("detalle-recibo").textContent = detalleRecibo;
    document.getElementById("total-recibo").textContent = document.getElementById("total").textContent;
    document.getElementById("recibo").style.display = "block";
}

function cerrarRecibo() {
    document.getElementById("recibo").style.display = "none";
    carrito = [];
    actualizarCarrito();
}
