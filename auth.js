 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 import { 
   getAuth,
   createUserWithEmailAndPassword, 
   signInWithEmailAndPassword,
   onAuthStateChanged,
   signOut
 } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCiSCKvJrQ1flToYHThK5QupoEqaGtZglo",
   authDomain: "marvel-2b0fe.firebaseapp.com",
   projectId: "marvel-2b0fe",
   storageBucket: "marvel-2b0fe.firebasestorage.app",
   messagingSenderId: "511554052003",
   appId: "1:511554052003:web:966969435285e88509c416",
   measurementId: "G-T3NLWNG34M"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth(app);

 const registroForm = document.getElementById('registroForm');
 registroForm.addEventListener('submit', (e) => {
 e.preventDefault();
 const email = document.getElementById('emailRegistro').value;
 const password = document.getElementById('passwordRegistro').value;

 createUserWithEmailAndPassword(auth,email, password)
   .then((userCredential) => {
     const user = userCredential.user;
     console.log('Usuario registrado: ', user);
     const signUpMessage = document.getElementById('signUpMessage');
     signUpMessage.style.display = 'block';
     signUpMessage.innerHTML = `
       <h1>:D</h1>
       <h1>¡Usuario registrado!</h1>
       <p>Disfruta del contenido</p>
     `;
     setTimeout(() => {
       signUpMessage.style.display = 'none';
     }, 3000);
   })
   .catch((error => {
     console.error('No ha sido posible registrarse: ', error)
     const errorMessage = document.getElementById('errorMessage');
      errorMessage.style.display = 'block';
      errorMessage.innerHTML = `
     <h1>:(</h1>
     <h1>Error!</h1>
     <p>No ha sido posible registrarse</p>
    `;
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 3000);
   }))
});

 const loginForm = document.getElementById('loginForm');
 loginForm.addEventListener('submit', (e) => {
 e.preventDefault();
 const email = document.getElementById('emailLogin').value;
 const password = document.getElementById('passwordLogin').value;

 signInWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
   const user = userCredential.user;
   const userData = document.querySelector('.data-usuario')
   userData.innerHTML = `
   <p>Ingresaste como: ${user.email}</p>
   `;
   console.log('El usuario ha iniciado sesión: ', user);
   const logInMessage = document.getElementById('logInMessage');
   logInMessage.style.display = 'block';
   logInMessage.innerHTML = `
   <h1>:)</h1>
   <h1>¡Bienvenido!</h1>
   <p>Has iniciado sesión</p>
   `;
   setTimeout(() => {
     logInMessage.style.display = 'none';
   }, 3000);
 })
 .catch((error) => {
   console.error('No ha sido posible iniciar sesión: ', error);
   const errorMessage = document.getElementById('errorMessage');
   errorMessage.style.display = 'block';
   errorMessage.innerHTML = `
     <h1>:(</h1>
     <h1>Error!</h1>
     <p>No ha sido posible iniciar sesión</p>
   `;
   setTimeout(() => {
     errorMessage.style.display = 'none';
   }, 3000);
 })});

 const registroButton = document.getElementById('registroButton');
 const loginButton = document.getElementById('loginButton');
  registroButton.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('registro').style.display = 'block'; 
  document.getElementById('login').style.display = 'none';
  registroButton.classList.add('active__button');
  loginButton.classList.remove('active__button');

});

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('login').style.display = 'block';
  document.getElementById('registro').style.display = 'none';
  loginButton.classList.add('active__button');
  registroButton.classList.remove('active__button');
});




const logoutButton = document.getElementById('cerrarSesion');
logoutButton.addEventListener('click', () => {
 signOut(auth)
 .then(()=> {
   console.log('El usuario ha cerrado sesión')
   const logOutMessage = document.getElementById('logOutMessage');
   logOutMessage.style.display = 'block';
   logOutMessage.innerHTML = `
   <h1>:)</h1>
   <h1>Goodbye!</h1>
   <p>Has cerrado sesión</p>
   `;
   setTimeout(() => {
     logOutMessage.style.display = 'none';
   }, 3000);
 })
 .catch((error) => {
   console.error('No se cerro la sesión', error)
 })
});
onAuthStateChanged(auth, (user) => {
 if (user) {
  new Notification('Bienvenido a Marvel');
  document.getElementById('auth').style.display = 'none';
  document.getElementById('content').style.display = 'block';
  document.getElementById('log').style.display = 'block';
  document.getElementById('cerrarSesion').style.display = 'block';
  document.querySelectorAll('#navBar, #bg, #h2, #h1').forEach(function(element) {
      element.style.display = 'flex';
  });
} else {
  new Notification('Inicia sesión para no perderte de nada');
  document.getElementById('auth').style.display = 'block';
  document.getElementById('content').style.display = 'none';
  document.getElementById('log').style.display = 'none';
  document.getElementById('cerrarSesion').style.display = 'none';
  document.querySelectorAll('#navBar, #bg, #h2, #h1').forEach(function(element) {
  element.style.display = 'none';
  loginButton.classList.add('active__button');
  });
}});