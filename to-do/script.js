(function () {
  const listEl = document.getElementById("todoList");
  const form = document.getElementById("todoForm");
  const input = document.getElementById("taskInput");
  const sessionCountEl = document.getElementById("sessionCount");
  const themeToggle = document.getElementById("themeToggle");

  function escapeText(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function loadTodos() {
    try {
      const raw = localStorage.getItem("todos");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function render() {
    const todos = loadTodos();
    listEl.innerHTML = "";
    todos.forEach((t, i) => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.innerHTML = t; 
      const rm = document.createElement("button");
      rm.type = "button";
      rm.textContent = "Remove";
      rm.dataset.index = String(i);
      li.appendChild(span);
      li.appendChild(rm);
      listEl.appendChild(li);
    });
  }

  function getSessionCount() {
    const v = sessionStorage.getItem("addedCount");
    return v ? parseInt(v, 10) : 0;
  }

  function setSessionCount(n) {
    sessionStorage.setItem("addedCount", String(n));
    sessionCountEl.textContent = "Tasks added this session: " + n;
  }

  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
  }

  function getCookie(name) {
    const key = name + "=";
    const parts = document.cookie.split(";");
    for (let i = 0; i < parts.length; i++) {
      const c = parts[i].trim();
      if (c.indexOf(key) === 0) return c.substring(key.length, c.length);
    }
    return "";
  }

  function applyTheme(t) {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(t);
    themeToggle.textContent = t === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
  }

  setSessionCount(getSessionCount());

  const savedTheme = getCookie("theme") || "light";
  applyTheme(savedTheme);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return; 

    const todos = loadTodos();
    todos.push(escapeText(text));
    saveTodos(todos);
    render();
    input.value = "";

    const c = getSessionCount() + 1;
    setSessionCount(c);
  });

  listEl.addEventListener("click", function (e) {
    const btn = e.target;
    if (btn.tagName === "BUTTON" && btn.dataset.index) {
      const idx = parseInt(btn.dataset.index, 10);
      const todos = loadTodos();
      todos.splice(idx, 1);
      saveTodos(todos);
      render();
    }
  });

  themeToggle.addEventListener("click", function () {
    const next = document.body.classList.contains("dark") ? "light" : "dark";
    applyTheme(next);
    setCookie("theme", next, 365);
  });

  render();
})();
