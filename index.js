document.getElementById('loginForm').addEventListener('submit', function(event) {
    // 1. Prevent the default form submission (which reloads the page)
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Reset message
    messageElement.className = 'hidden';
    messageElement.textContent = '';

    // 2. Perform Frontend Validation (e.g., check for empty fields)
    if (username === "" || password === "") {
        messageElement.textContent = 'Please enter both username and password.';
        messageElement.className = 'error';
        return; // Stop execution
    }

    // 3. SECURE AUTHENTICATION (THIS SECTION MUST USE A BACKEND SERVER)
    
    /* *** WARNING: DO NOT USE HARDCODED CREDENTIALS OR CUSTOM ENCRYPTION IN PRODUCTION ***

    In a real application, this is where you would use the Fetch API
    to send the credentials over a secure HTTPS connection to your server
    for verification against a securely hashed password database.

    Example of what should happen:
    fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        // Handle server response (success or failure)
    });
    */

    // --- TEMPORARY DEMO (REPLACE WITH SERVER-SIDE LOGIC) ---
    // Use a placeholder success state for demonstration
    if (username === "new" && password === "wave") {
        messageElement.textContent = 'Login Successful! Redirecting...';
        messageElement.className = 'success';
        // In a real app: redirect to dashboard
         window.location.href = 'Kiyosaki.html'; 
    } else {
        messageElement.textContent = 'Invalid username or password.';
        messageElement.className = 'error';
    }
    // --- END TEMPORARY DEMO ---
});
