/* ================= BASIC ================= */
function changeMessage() {
    document.getElementById("dynamic-text").innerText =
        "✅ JavaScript functions are working!";
}

/* ================= CLOCK ================= */
setInterval(() => {
    document.getElementById("clock").innerText =
        new Date().toLocaleTimeString();
}, 1000);

/* ================= DARK MODE ================= */
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

/* ================= THEME SWITCHER ================= */
function changeTheme(theme) {
    document.body.setAttribute("data-theme", theme);
}

/* ================= TODO LIST ================= */
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
    const list = document.getElementById("todo-list");
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${todo} <button onclick="removeTodo(${index})">❌</button>`;
        list.appendChild(li);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo() {
    const input = document.getElementById("todo-input");
    if (input.value.trim() !== "") {
        todos.push(input.value);
        input.value = "";
        renderTodos();
    }
}

function removeTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}
renderTodos();

/* ================= FORM ================= */
function submitForm(e) {
    e.preventDefault();
    document.getElementById("form-message").innerText =
        "📨 Message sent successfully!";
}

/* ================= SCROLL TO TOP ================= */
window.onscroll = () => {
    document.getElementById("scrollTopBtn").style.display =
        window.scrollY > 300 ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
