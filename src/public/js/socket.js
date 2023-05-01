const socket = io();

const container = document.getElementById('container');
const butAdd = document.getElementById('butAdd');


//Socket
socket.on('showProducts', data => {
    
    console.log(data);
    
    container.innerHTML = ``
    data.forEach(prod => {
        container.innerHTML += `
        <div>
            <h1>Código: ${prod.code}</h1>
            <p>Nombre: ${prod.title}</p> 
            <p>Descripción: ${prod.description}</p> 
            <p>Categoria: ${prod.category}</p> 
            <p>Precio: ${prod.price}</p>
            <p>Stock: ${prod.stock}</p>
        </div>
        `
    })
});


butAdd.addEventListener('submit', (event) => {
    event.preventDefault();
    //window.location= "/api/products";
});