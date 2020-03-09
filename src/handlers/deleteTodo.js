const deleteTodo = (id, todos, setTodos) => {
  let newTodos = todos.filter(todo => todo.id !== id);
  setTodos(newTodos);
  localStorage.setItem("todos", JSON.stringify(newTodos));
};

export default deleteTodo;
