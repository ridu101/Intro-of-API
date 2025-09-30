document.getElementById('post-btn')
    .addEventListener('click', function () {

        const url = 'https://jsonplaceholder.typicode.com/users';

        fetch(url)
            .then(res => res.json())
            .then(data => {
                displayPost(data)
            })

    })

//   now make the function of loading and displaying the posts

const displayPost = posts => {
    // 1. get the post container 
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';
    

    // 2. loop through the posts

    posts.forEach(post => {

        // 3. create a div for each post
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `<div class="post-card">
            <p>Id: ${post.id}</p>
            <p>Name:${post.username}</p>
            <p>Email: ${post.email}</p>
            <!-- address div -->
             <div>
                  ${post.address}}
             </div>
            <p>Phone: ${post.phone}</p>
            <p>Website: ${post.website}</p>
            <!-- company div  -->
             <div>
                  ${post.company}
             </div>
         </div>
             
            `

        // 4 append each post to the container
        postContainer.append(postDiv)
    });


}