// blog.js

const readline = require('readline');

// Initialize an array to store posts
let posts = [
  { title: "İlk Post", content: "Bu, blogumdaki ilk post." },
  { title: "İkinci Post", content: "Bu, ikinci postum." }
];

// Create a readline interface to handle user input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to display all posts
function displayPosts() {
  console.log("Mevcut Postlar:");
  if (posts.length === 0) {
    console.log("Henüz hiçbir post yok.");
  } else {
    // Sort posts by title
    posts.sort((a, b) => a.title.localeCompare(b.title));
    posts.forEach((post, index) => {
      console.log(`${index + 1}. Başlık: ${post.title} - İçerik: ${post.content}`);
    });
  }
  console.log(); // Adding a line break for clarity
}

// Function to add a new post
function addPost(title, content) {
  posts.push({ title, content });
  console.log("Yeni post eklendi!\n");
  displayPosts();  // Display the posts again after adding a new one
}

// Function to prompt user for input and add a post
function promptForPost() {
  rl.question("Yeni post başlığını girin: ", (title) => {
    rl.question("Yeni post içeriğini girin: ", (content) => {
      addPost(title, content);
      rl.question("Yeni post eklemeye devam etmek ister misiniz? (Evet/Hayır): ", (answer) => {
        if (answer.toLowerCase() === "evet") {
          promptForPost();  // If yes, prompt again for another post
        } else {
          rl.close();  // Close the readline interface if no more posts
        }
      });
    });
  });
}

// Start by displaying existing posts
displayPosts();

// After initial posts, prompt the user to add new posts
promptForPost();
