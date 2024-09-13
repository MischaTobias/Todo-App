import { useEffect, useReducer } from "react";
import { todoReducer } from "./helpers/todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: "Make Satoru Gojo feel tired",
  //   done: false,
  // },
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };

    dispatch(action);
  };

  return (
    <>
      <h1>
        TodoApp: 10, <small>pending: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        </div>

        <div className="col-5">
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
