const sortTodos = (sortBy, todos, setTodos) => {
  let newTodos = todos.slice();
  if (sortBy === "Priority") {
    newTodos.sort((a, b) => {
      return b.priorityValue - a.priorityValue;
    });
  }
  if (sortBy === "Created") {
    newTodos.sort((a, b) => {
      return a.id - b.id;
    });
  }
  setTodos(newTodos);
  localStorage.setItem("todos", JSON.stringify(newTodos));
};

export default sortTodos;
