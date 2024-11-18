function startClock() {
    const nameInput = document.getElementById("nameInput").value;
    const greetingSection = document.getElementById("greetingSection");
    const greeting = document.getElementById("greeting");

    if (nameInput.trim() === "") {
        alert("Please enter your name to proceed.");
        return;
    }

    greeting.innerText = `Hello, ${nameInput}!`;
    greetingSection.classList.remove("hidden"); // Ensure this displays the section

    // Hide the input and button after the greeting is displayed
    document.querySelector("header").style.display = "none";

    updateTime();
    setInterval(updateTime, 1000);
}

function updateTime() {
    const clock = document.getElementById("clock");
    const day = document.getElementById("day");

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    day.innerText = days[now.getDay()];
}
