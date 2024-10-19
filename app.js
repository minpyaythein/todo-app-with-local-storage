const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-todo");
const todoUl = document.getElementById("todo-ul");

addBtn.addEventListener("click", () => {
    console.log("clicked");
    if (input.value === "") {
        alert("Please enter a task");
    } else {
        const li = document.createElement("li");

        li.classList.add("list-group-item");
        li.textContent = input.value;
        li.addEventListener("click", () => {
            console.log("removed");
            li.remove();
        })

        const detailsPopup = document.createElement("span");
        detailsPopup.classList.add("details-popup");
        detailsPopup.textContent = "Task details: Click to remove";

        li.textContent = input.value;
        li.appendChild(detailsPopup);

        let hoverTimeout;
        li.addEventListener("mouseenter", () => {
            hoverTimeout = setTimeout(() => {
                li.classList.add("show-popup");
            }, 600);
        });
        li.addEventListener("mouseleave", () => {
            clearTimeout(hoverTimeout);
            li.classList.remove("show-popup");
        });
        li.addEventListener("click", () => {
            li.remove();
        });

        todoUl.appendChild(li);
        input.value = "";
    }
})