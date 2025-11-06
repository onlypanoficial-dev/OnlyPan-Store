import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const productosContainer = document.getElementById("productos");

async function cargarProductos() {
  const querySnapshot = await getDocs(collection(db, "productos"));
  productosContainer.innerHTML = "";
  querySnapshot.forEach((doc) => {
    const producto = doc.data();
    productosContainer.innerHTML += `
      <div class="producto" data-aos="zoom-in">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <span>$${producto.precio}</span>
      </div>
    `;
  });
}

cargarProductos();
