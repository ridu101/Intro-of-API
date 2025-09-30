const loadPost = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    fetch(url)

    const response = await fetch(url);
    console.log('hello world');
    const json= await response.json();
    console.log(true)

}

loadPost()



