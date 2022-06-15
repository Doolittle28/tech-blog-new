console.log("comment.js is running") //just to check that this file gets run at all
async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('#comment').value.trim();
    const post_id = document.querySelector('#post-id').value;

    if (comment_text) {
        const response = await fetch ('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
          } else {
            alert(response.statusText);
          }
    }
}

document.querySelector('#add-comment').addEventListener('submit', commentFormHandler);
