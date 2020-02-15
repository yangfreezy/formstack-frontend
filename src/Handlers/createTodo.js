const createTodo = (
  e,
  text,
  priority,
  priorityValue,
  setTodos,
  todos,
  setId,
  id
) => {
  e.preventDefault();
  setTodos([...todos, { id, text, priority, priorityValue }]);
  setId(id + 1);
};

export default createTodo;
