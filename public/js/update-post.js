const editPostHandler = async (post_id) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const post_content = document.querySelector('#post-content').value.trim();
  
    if (title && post_content) {
      const response = await fetch('/api/post/' + post_id, {
        method: 'PUT',
        body: JSON.stringify({ title, post_content, post_id}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to post.');
      }
    }
  };
  