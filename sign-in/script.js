document.getElementById('signinForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
      const response = await fetch('https://fakestoreapi.com/users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
      });

      if (response.ok) {
          const data = await response.json();
          alert('Sign in successful!');
          window.location.href = '/index.html'; 
      } else {
          const data = await response.json();
          alert(`Error: ${data.message}`);
      }
  } catch (error) {
      alert('An error occurred while signing in!');
      console.error('Error details:', error);
  }
});

