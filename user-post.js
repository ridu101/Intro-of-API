document.getElementById('post-btn')
  .addEventListener('click', function () {
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
      .then(res => res.json())
      .then(data => {
        displayPost(data);
      });
  });

// Function to display posts (users)
const displayPost = posts => {
  const postContainer = document.getElementById('post-container');
  postContainer.innerHTML = '';

  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post-card';

    postDiv.innerHTML = `
      <p><strong>Id:</strong> ${post.id}</p>
      <p><strong>Username:</strong> ${post.username}</p>
      <p><strong>Email:</strong> ${post.email}</p>

      <!-- address -->
      <div>
        <strong>Address:</strong>
        <p>${post.address.suite}, ${post.address.street}, ${post.address.city}, ${post.address.zipcode}</p>
      </div>

      <p><strong>Phone:</strong> ${post.phone}</p>
      <p><strong>Website:</strong> <a href="http://${post.website}" target="_blank">${post.website}</a></p>

      <!-- company -->
      <div>
        <strong>Company:</strong>
        <p>${post.company.name}</p>
        <p><em>${post.company.catchPhrase}</em></p>
      </div>
    `;

    postContainer.append(postDiv);
  });
};
