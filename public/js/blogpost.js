const newPostHandler = async (event) => {
    event.preventDefault();

    let date = new Date();
    let currentMonth = date.getMonth() + 1;
    let currentDay = date.getDate();
    let currentYear = date.getFullYear();

    const name = document.querySelector('#post-title').value.trim();
    const description = document.querySelector('#post-description').value.trim();
    const date_created = (currentYear + "-" + currentMonth + "-" + currentDay);

    if (name && description && date_created) {
        const response = await fetch('/api/blogposts/dashboard', {
            method: 'POST',
            body: JSON.stringify({ name, description, date_created }),
            headers: { 'Content-Type' : 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/api/blogposts/dashboard');
        }
        else {
            console.log('Post not created');
        }
    }
}

document.querySelector('#post-add-btn').addEventListener('click', newPostHandler);


const editPostHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector(".card-body").firstElementChild.textContent;
    const description = document.querySelector(".card-body").lastElementChild.textContent;

    if (name && description) {
        const response = await fetch('/api/blogposts/update-delete', {
            method: 'GET'
        });

        if (response.ok) {
            document.location.replace('/api/blogposts/update-delete');
        }
        else {
            console.log('Response not okay');
        }
    }


}

document.querySelector('#edit-btn').addEventListener('click', editPostHandler);