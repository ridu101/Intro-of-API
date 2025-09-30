const loadPost = () => {

    const url = 'https://jsonplaceholder.typicode.com/posts#'
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            displayPost(data)
        })

}

const displayPost = post => {

    // 1.Get the container where you want to display the posts

    const postContainer= document.getElementById('post-container');
    postContainer.innerHTML='';
    console.log(postContainer)

   for (const singlePost of post){

    // 2. Create HTML element for each post
    const postCard= document.createElement('div')

    postCard.innerHTML=`<div class="post-card">
            <h1>${singlePost.title}</h1>
            <p>${singlePost.body}</p>
        </div>`

    // 3. Append each post to the container
    postContainer.append(postCard)
    
   }
}

loadPost()