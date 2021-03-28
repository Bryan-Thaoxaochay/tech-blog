const updatePostHandler = async (event) => {
    event.preventDefault();

        const name = document.querySelector(".card-body").firstElementChild.textContent;
        const description = document.querySelector(".card-body").lastElementChild.textContent;
    
        console.log(name, description);

        if (name && description) {
            const response = await fetch('/api/blogposts/update-delete', {
                method: 'PUT',
                body: JSON.stringify({ name, description }),
                headers: { 'Content-Type' : 'application/json' }
            });
    
            if (response.ok) {
                // document.location.replace('/api/blogposts/dashboard');
            }
            else {
                console.log('Response not okay');
            }
        }
}

document.querySelector('#update-btn').addEventListener('click', updatePostHandler);