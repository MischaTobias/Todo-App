export const TodoItem = ({ todo }) => {
  const { id, description } = todo;

  return (
    <li key={id} className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{description}</span>
      <button className="btn btn-danger">Mark as done</button>
    </li>
  );
};
