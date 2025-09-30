document.getElementById('post-btn')
    .addEventListener('click', function () {

        const url = 'https://jsonplaceholder.typicode.com/users';

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    })

//   now make the function of loading and displaying the posts

const displayPost = posts => {
    //  get the post container 

    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';

    // 2. loop through the posts

    posts.forEach(post => {

        // 3. create a div for each post
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            
            
            
            `

        // 4 append each post to the container
        postContainer.append(postDiv)
    });


}