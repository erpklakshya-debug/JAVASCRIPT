import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1>Student Task Manager</h1>

      <div style={styles.inputBox}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {tasks.map((item, index) => (
          <li key={index} style={styles.task}>
            {item}
            <button
              onClick={() => deleteTask(index)}
              style={styles.deleteBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
  inputBox: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
  },
  button: {
    padding: "10px 15px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },
  task: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    margin: "10px 0",
    background: "#f4f4f4",
    borderRadius: "5px",
  },
  deleteBtn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default App;