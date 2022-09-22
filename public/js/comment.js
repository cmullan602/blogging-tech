const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment_content = document.querySelector('#comment-content').value.trim();
    const postElement = document.querySelector('#post');
  
    if (comment_content) {
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ comment_content, post_id: postElement.dataset.id}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/post/'+ postElement.dataset.id);
      } else {
        alert('Failed to post comment.');
      }
    }
  };
  
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);