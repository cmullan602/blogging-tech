const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment_content = document.querySelector('#comment-content').value.trim();
    const imagesElement = document.querySelector('#images');
  
    if (comment_content) {
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ comment_content, image_id: imagesElement.dataset.id}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/image/'+ imagesElement.dataset.id);
      } else {
        alert('Failed to post comment.');
      }
    }
  };
  
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);