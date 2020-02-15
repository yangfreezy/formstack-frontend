const deleteTodo = ({ id, todos, setTodos }) => {
  setTodos(todos.filter(todo => todo.id !== id));
};

export default deleteTodo;
