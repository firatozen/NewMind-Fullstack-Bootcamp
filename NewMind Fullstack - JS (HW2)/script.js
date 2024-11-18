// Function to add a new task
function newElement() {
    const taskInput = document.getElementById("task");
    const taskValue = taskInput.value.trim();
  
    // If the input is empty, show an error toast
    if (!taskValue) {
      showToast('error');
      return;
    }
  
    // Create a new list item
    const li = document.createElement("li");
    li.textContent = taskValue;
    li.onclick = toggleTaskCompletion;
  
    // Create a close button for the task
    const closeButton = document.createElement("span");
    closeButton.textContent = "×";
    closeButton.classList.add("close");
    closeButton.onclick = removeTask;
  
    // Append the close button to the list item
    li.appendChild(closeButton);
  
    // Append the list item to the list
    document.getElementById("list").appendChild(li);
  
    // Clear the input field
    taskInput.value = '';
  
    // Show a success toast
    showToast('success');
  }
  
  // Function to toggle task completion
  function toggleTaskCompletion(event) {
    const li = event.target;
    li.classList.toggle("checked");
  }
  
  // Function to remove a task
  function removeTask(event) {
    const li = event.target.parentElement;
    li.remove();
  }
  
  // Function to show toast notifications
  function showToast(type) {
    const toast = type === 'success' ? document.getElementById("liveToast") : document.getElementById("liveToastError");
    $(toast).toast('show');
  }
  
  // Save tasks to localStorage when modified
  document.getElementById("list").addEventListener("DOMSubtreeModified", saveTasks);
  
  // Load tasks from localStorage when the page loads
  document.addEventListener("DOMContentLoaded", loadTasks);
  
  // Function to save tasks to localStorage
  function saveTasks() {
    const tasks = [];
    const listItems = document.querySelectorAll("#list li");
  
    listItems.forEach(item => {
      tasks.push({
        text: item.textContent.trim(),
        completed: item.classList.contains("checked")
      });
    });
  
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  // Function to load tasks from localStorage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.text;
        if (task.completed) li.classList.add("checked");
        
        const closeButton = document.createElement("span");
        closeButton.textContent = "×";
        closeButton.classList.add("close");
        closeButton.onclick = removeTask;
        li.appendChild(closeButton);
  
        document.getElementById("list").appendChild(li);
      });
    }
  }
  