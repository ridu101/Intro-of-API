// // post js connected 
// // console.log('post js connected')    
// const loadPost = () => {

//     const url = 'https://jsonplaceholder.typicode.com/posts#'
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             // console.log(data)
//             displayPost(data)
//         })

// }
// //  receive the array of post objects

// const displayPost = post => {

//     // 1.Get the container where you want to display the posts

//     const postContainer = document.getElementById('post-container');
//     postContainer.innerHTML = '';
//     // console.log(postContainer)

//     //    using forEach loop
//     post.forEach(post => {
//         // console.log(post.title)

//         // 2. Create HTML element for each post

//         const li= document.createElement('li');
//         li.innerHTML=post.title;
//         // console.log(li);

//         // 3. Append each post to the container

//         postContainer.appendChild(li);

//     })
//     // // using for loop
//     // for ( let i=0; i<post.length; i++){
//     //     console.log(post[i])
//     // }
//     // // using for of loop
//     // for ( const singlePost of post){
//     //     console.log(singlePost)
//     // }


// }