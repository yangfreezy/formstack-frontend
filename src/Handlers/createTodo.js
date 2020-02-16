const createTodo = (
  text,
  priority,
  priorityValue,
  setTodos,
  todos,
  setId,
  id
) => {
  let newTodos = [...todos, { id, text, priority, priorityValue }];
  let newId = id + 1;
  setTodos(newTodos);
  setId(newId);
  localStorage.setItem("todos", JSON.stringify(newTodos));
};

export default createTodo;
