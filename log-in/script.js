document.getElementById('createForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value; 
    const password = document.getElementById('password').value;

    fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        body: JSON.stringify({
            email: email, 
            password: password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(data => {
        console.log('User created:', data);  

    
        const user = {
            email: email, 
            password: password
        };
        localStorage.setItem('user', JSON.stringify(user));

        alert('Account created successfully! Redirecting to Sign In...');
        window.location.href = '/sign-in/signin.html'; 

        
    })
    .catch(err => {
        console.error('Error:', err);
        alert('Failed to create account. Try again.');
    });
});



