console.log("prueba con firebase!")

const firebaseConfig = {
    apiKey: "AIzaSyBgtNiups4j3Tn2ZX2p3Utebt0nyjW5Xc4",
    authDomain: "angelita-macrame.firebaseapp.com",
    projectId: "angelita-macrame",
    storageBucket: "angelita-macrame.appspot.com",
    messagingSenderId: "902597640520",
    appId: "1:902597640520:web:a5d10a75ef9ff544aa737d",
    measurementId: "G-WBY28FD321"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const usuariosRef = db.collection('productos');

const productos = [];

usuariosRef.get().then((querySnapshot) => {
	// Itera sobre cada documento en la colección
    querySnapshot.forEach((doc) => {
        // Accede a los datos de cada documento
        const producto = doc.data();
        console.log(producto); // Muestra los datos del usuario en la consola
        productos.push(doc.data());
      });

    console.log("aqui es");
    productos.forEach(producto =>{
    console.log(producto.documentID);
    });

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
}).catch((error) => {
	console.error('Error al obtener usuarios:', error);
  });

 //console.log("los datos son:");
 console.log("aqui vamos");