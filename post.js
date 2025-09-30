// post js connected 
// console.log('post js connected')    
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

    // 1. display in UI
    








    //    using forEach loop
    post.forEach(post => {
        console.log(post)

    })
    // // using for loop
    // for ( let i=0; i<post.length; i++){
    //     console.log(post[i])
    // }
    // // using for of loop
    // for ( const singlePost of post){
    //     console.log(singlePost)
    // }


}