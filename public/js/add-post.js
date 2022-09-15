const addPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#email-address').value.trim();
    const post_content = document.querySelector('#password').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ content, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  
  
  document
    .querySelector('.add-post')
    .addEventListener('submit', addPostHandler);