/* CLOCK */
setInterval(() => {
    document.getElementById("clock").innerText =
        new Date().toLocaleTimeString();
}, 1000);

/* ALERT */
function showAlert() {
    document.getElementById("dynamic-text").innerText =
        "✅ JavaScript is working perfectly!";
}

/* DARK MODE */
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

/* THEME */
function changeTheme(theme) {
    document.body.setAttribute("data-theme", theme);
}

/* TODO */
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
    const list = document.getElementById("todo-list");
    list.innerHTML = "";
    todos.forEach((t, i) => {
        const li = document.createElement("li");
        li.innerHTML = `${t} <button onclick="removeTodo(${i})">❌</button>`;
        list.appendChild(li);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo() {
    const input = document.getElementById("todo-input");
    if (input.value.trim()) {
        todos.push(input.value);
        input.value = "";
        renderTodos();
    }
}

function removeTodo(i) {
    todos.splice(i, 1);
    renderTodos();
}
renderTodos();

/* COUNTER */
let count = 0;
function increment() {
    document.getElementById("count").innerText = ++count;
}
function decrement() {
    document.getElementById("count").innerText = --count;
}
function resetCounter() {
    count = 0;
    document.getElementById("count").innerText = count;
}

/* FORM */
function submitForm(e) {
    e.preventDefault();
    document.getElementById("form-message").innerText =
        "📨 Message sent successfully!";
}

/* SCROLL TOP */
window.onscroll = () => {
    document.getElementById("scrollTopBtn").style.display =
        window.scrollY > 300 ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
