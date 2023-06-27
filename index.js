// Define an array to store the blog posts
let posts = [];

// Function to create a new post
function createPost(title, content) {
  const post = {
    id: Date.now(),
    title,
    content
  };
  posts.push(post);
}

// Function to update a post
function updatePost(id, title, content) {
  const post = posts.find(post => post.id === id);
  if (post) {
    post.title = title;
    post.content = content;
  }
}

// Function to delete a post
function deletePost(id) {
  posts = posts.filter(post => post.id !== id);
  displayPosts();
}

// Function to display all posts
function displayPosts() {
  const postsContainer = document.getElementById('posts-container');
  postsContainer.innerHTML = '';
  
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <button onclick="editPost(${post.id})">Edit</button>
      <button onclick="deletePost(${post.id})">Delete</button>
    `;
    postsContainer.appendChild(postElement);
  });
}

// Function to handle the form submission
function handleFormSubmit(event) {
  event.preventDefault();
  
  const titleInput = document.getElementById('title-input');
  const contentInput = document.getElementById('content-input');
  
  const title = titleInput.value;
  const content = contentInput.value;
  
  if (title && content) {
    createPost(title, content);
    titleInput.value = '';
    contentInput.value = '';
    displayPosts();
  }
}

// Function to handle editing a post
function editPost(id) {
  const post = posts.find(post => post.id === id);
  if (post) {
    const titleInput = document.getElementById('title-input');
    const contentInput = document.getElementById('content-input');
    const submitButton = document.getElementById('submit-button');
    
    titleInput.value = post.title;
    contentInput.value = post.content;
    submitButton.innerText = 'Update';
    submitButton.onclick = function() {
      updatePost(post.id, titleInput.value, contentInput.value);
      submitButton.innerText = 'Submit';
      submitButton.onclick = handleFormSubmit;
      titleInput.value = '';
      contentInput.value = '';
      displayPosts();
    };
  }
}

// Add event listener to form submission
const form = document.getElementById('post-form');
form.addEventListener('submit', handleFormSubmit);

// Display initial posts
displayPosts();


// Function to activate Post Form
function activate() {
  let postForm = document.getElementById('post-form')

  if (postForm.style.display === 'grid') {
    postForm.style.display = 'none';
  } else {
    postForm.style.display = 'grid';
  }
}