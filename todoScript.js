const loadTodo= () =>{
    const url = 'https://jsonplaceholder.typicode.com/todos'
    fetch(url)
    .then(res => res.json())
    .then(data => displayTodos(data))
}

const displayTodos = todos =>{

    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = '';   

    todos.forEach(todo => {

        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
        <div class="todo-card">
        <h3>Title: ${todo.title}</h3>
        <p>Completed: ${todo.completed === true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}</p>
        <p>UserId: ${todo.userId}</p>
        <p> Title: ${todo.title}</p>
        <p>Id: ${todo.id}</p>
        </div>
        `
        todoContainer.appendChild(todoDiv)
    });
}