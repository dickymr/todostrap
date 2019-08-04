// DUMMY DATA
const myTodos = [
  {
    id: 1,
    task: "Go to barbershop",
    done: true
  },
  {
    id: 2,
    task: "Learn japanese and sundanese",
    done: false
  },
  {
    id: 3,
    task: "Cardio",
    done: false
  },
  {
    id: 4,
    task: "Service my motorcycle",
    done: true
  },
  {
    id: 5,
    task: "Meditation",
    done: false
  },
  {
    id: 6,
    task: "Learn golang",
    done: true
  }
];

// SHOW TODOS
const showTodos = () => {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  myTodos.forEach(todo => {
    if (todo.done) {
      const todoDone = `
      <div class="list list-done" id="${todo.id}">
        <span>${todo.task}</span>
        <div class="button-action">
          <button class="btn btn-sm btn-danger" id="delete-button" onclick="deleteTodo(${
            todo.id
          })">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>`;
      todoList.insertAdjacentHTML("afterbegin", todoDone);
    } else {
      const todoNotDone = `
      <div class="list" id="${todo.id}">
        <span>${todo.task}</span>
        <div class="button-action">
          <button class="btn btn-sm btn-danger" id="delete-button" onclick="deleteTodo(${
            todo.id
          })">
            <i class="fa fa-trash"></i>
          </button>
          <button class="btn btn-sm btn-success" id="done-button" onclick="doneTodo(${
            todo.id
          })">
            <i class="fa fa-check"></i>
          </button>
        </div>
      </div>`;
      todoList.insertAdjacentHTML("afterbegin", todoNotDone);
    }
  });
};

// GET ID
const getId = () => {
  if (myTodos.length === 0) {
    return 1;
  } else {
    const lastId = myTodos[myTodos.length - 1].id;
    return lastId + 1;
  }
};

// INSERT TODO
const insertTodo = () => {
  const task = document.getElementById("add-input").value;
  if (task === "") {
    return alert("Task cannot blank");
  }

  const newTodo = {
    id: getId(),
    task: task,
    done: false
  };
  myTodos.push(newTodo);

  document.getElementById("add-input").value = "";

  showTodos();
};

// DONE TODO
const doneTodo = id => {
  myTodos.forEach(todo => {
    if (todo.id === id) {
      todo.done = true;
    }
  });

  showTodos();
};

// DELETE TODO
const deleteTodo = id => {
  if (confirm("Are you sure to delete this task?")) {
    myTodos.pop(id);
  }

  showTodos();
};

showTodos();
