import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onTodoSubmit = (event) => {
    event.preventDefault();

    if (!description.trim()) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    onNewTodo(newTodo);

    onResetForm();
  };

  return (
    <>
      <h4>Add TODO</h4>
      <hr />

      <form onSubmit={onTodoSubmit}>
        <input
          type="text"
          placeholder="What to do?"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
        />

        <button type="submit" className="btn btn-outline-primary mt-1">
          Add
        </button>
      </form>
    </>
  );
};
