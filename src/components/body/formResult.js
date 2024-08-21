function Results({ initial, toggle, deleteItem }) {
  return (
    <div className="output-container">
      {initial.map((todo) => (
        <div className="result">
          <p
            className="output"
            style={{
              backgroundColor: todo.complete ? "grey" : "red",
              transition: "0.2s",
              color: todo.complete ? "white" : "lavender",
            }}
          >
            Name: {todo.name} Age:{todo.age}_years_old
          </p>
          <button onClick={() => toggle(todo.id)}>toggle</button>
          <button onClick={() => deleteItem(todo.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}
export default Results;
