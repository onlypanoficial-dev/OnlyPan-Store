import { app, db, auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const loginContainer = document.getElementById("loginContainer");
const adminPanel = document.getElementById("adminPanel");

const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const msg = document.getElementById("loginMsg");

loginBtn.addEventListener("click", async () => {
  try {
    await signInWithEmailAndPassword(auth, emailInput.value, passInput.value);
  } catch (e) {
    msg.textContent = "Error de acceso";
  }
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    loginContainer.style.display = "none";
    adminPanel.classList.remove("hidden");
    cargarProductos();
  } else {
    loginContainer.style.display = "block";
    adminPanel.classList.add("hidden");
  }
});

// CRUD
const agregarBtn = document.getElementById("agregarBtn");
agregarBtn.addEventListener("click", async () => {
  const nombre = document.getElementById("nombre").value;
  const precio = parseFloat(document.getElementById("precio").value);
  const descripcion = document.getElementById("descripcion").value;
  const imagen = document.getElementById("imagen").value;
  await addDoc(collection(db, "productos"), { nombre, precio, descripcion, imagen });
  cargarProductos();
});

async function cargarProductos() {
  const lista = document.getElementById("listaProductos");
  const querySnapshot = await getDocs(collection(db, "productos"));
  lista.innerHTML = "";
  querySnapshot.forEach((docu) => {
    const p = docu.data();
    lista.innerHTML += `
      <div class="prod-item">
        <h3>${p.nombre}</h3>
        <p>$${p.precio}</p>
        <button onclick="borrarProducto('${docu.id}')">Eliminar</button>
      </div>
    `;
  });
}

window.borrarProducto = async (id) => {
  await deleteDoc(doc(db, "productos", id));
  cargarProductos();
};
