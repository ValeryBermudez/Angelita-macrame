document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { 
            id: 1001, 
            name: 'Tote-Bag', 
            description: 'Esta tote-bag fue hecha con hilo 100% algodón', 
            price: '200.000', 
            url_img: './img/productos/tote-bag.jpeg'
        },
        { 
            id: 1002,
            name: 'Bolso',
            description: 'Este bolso fue hecho con hilo 100% algodón', 
            price: '150.000',
            url_img: './img/productos/bolso.jpeg'
        },
        { 
            id: 1003, 
            name: 'Colgantes de matera', 
            description: 'Este colgante fue hecho con hilo 100% algodón', 
            price: '100.000', 
            url_img: './img/productos/colgante.jpeg'
        },
    ]
    const tarjetas = document.getElementById('tarjetas');

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const imagen = document.createElement('div');
        imagen.classList.add('imagen');
        
        const img = document.createElement('img');
        img.classList.add('macrame');	
        img.src = producto.url_img;
        img.alt = "macrame";

        imagen.appendChild(img);
        
        const contenido = document.createElement('div');
        contenido.classList.add('contenido');
        
        const name = document.createElement('h3');
        name.textContent = producto.name;
        
        const description = document.createElement('p');
        description.textContent = producto.description;
        
        const price = document.createElement('h2');
        price.textContent = `$${producto.price}`;

        contenido.appendChild(name);
        contenido.appendChild(description);
        contenido.appendChild(price);

        card.appendChild(imagen);
        card.appendChild(contenido);

        tarjetas.appendChild(card);
    });
})