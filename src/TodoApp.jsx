import { TodoAdd, TodoList } from "./components";
import { useTodos } from "./hooks";

export const TodoApp = () => {
  const {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    todosCount,
    pendingTodosCount,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp: {todosCount}, <small>pending: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
