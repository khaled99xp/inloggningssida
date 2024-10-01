    // Hårdkodat användarnamn och lösenord.
    const correctUsername = "test";
    const correctPassword = "1234";

    // Get referenser till DOM element.
    const loginForm = document.getElementById('login-form');
    const utbildningar = document.getElementById('utbildningar');
    const errorMsg = document.getElementById('error-msg');
    const canvasLink = document.getElementById('canvas-link');
    const welcomeMessage = document.getElementById('welcome-message');
    const logoutBtn = document.getElementById('logout-btn');

    // Visa login form när user klickar på "Logga in i Canvas".
    canvasLink.addEventListener('click', function (e) {
      e.preventDefault();
      // Visa endast inlogg form om user inte är inloggad.
      if (localStorage.getItem('loggedIn') !== 'true') {
        loginForm.style.display = 'block'; // Visa login form.
        utbildningar.style.display = 'none'; // Dölja utbildningar section.
        welcomeMessage.style.display = 'none'; //Dölja welcome message.
      }
    });

    // Kontrollera om user redan är inloggad.
    document.addEventListener('DOMContentLoaded', function () {
      if (localStorage.getItem('loggedIn') === 'true') {
        loginForm.style.display = 'none';
        utbildningar.style.display = 'none';
        welcomeMessage.style.display = 'block';
        canvasLink.textContent = "Mina sidor"; // Ändra knapp text (Logga in i Canvas) till "Mina sidor"
      }
    });

    // Hantera inloggn.
    document.getElementById('login-btn').addEventListener('click', function () {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // Kontrolera om de upggifter är stämmer överens med de hårdkodade valuses.
      if (username === correctUsername && password === correctPassword) {
        localStorage.setItem('loggedIn', 'true');
        loginForm.style.display = 'none';
        utbildningar.style.display = 'none';
        welcomeMessage.style.display = 'block';
        canvasLink.textContent = "Mina sidor";  // Ändra knapp text (Logga in i Canvas) till "Mina sidor"
      } else { 
        // Display error message att upggifter är felaktiga.
        errorMsg.textContent = "Felaktigt namn eller lösenord!";
        errorMsg.style.color = "red";
      }
    });

    // Hantera logout.
    logoutBtn.addEventListener('click', function () {
      localStorage.removeItem('loggedIn'); // Rensa login status.
      loginForm.style.display = 'none'; // Dölja login form.
      utbildningar.style.display = 'block';
      welcomeMessage.style.display = 'none';
      canvasLink.textContent = "Logga in i Canvas";  // Återställ knappen tillbaka till "Logga in i Canvas"
    });
