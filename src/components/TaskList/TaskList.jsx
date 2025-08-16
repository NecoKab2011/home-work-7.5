import { Component } from "react";
import "./TaskList.css";

export class TaskList extends Component {
  state = {
    list: [],
  };

  addTask = (e) => {
    e.preventDefault();
    const input = e.target.elements["task-input"];
    const text = input.value;

    if (text === "") {
      return;
    }

    this.setState((prev) => ({
      list: [...prev.list, text],
    }));

    input.value = "";
  };

  deleteTask = (index) => {
    const newList = [...this.state.list];
    newList.splice(index, 1);
    this.setState({ list: newList });
  };

  render() {
    const { list } = this.state;

    return (
      <div className="task-box">
        <h1 className="task-title">Task List</h1>

        <form className="task-form" onSubmit={this.addTask}>
          <input
            className="task-input"
            required
            type="text"
            placeholder="Enter task"
            name="task-input"
          />
          <button className="task-submit" type="submit">
            Add task
          </button>
        </form>

        <ul className="task-list">
          {list.map((text, index) => (
            <li className="task-item" key={index}>
              <p className="task-text">{text}</p>
              <button
                className="task-delete-btn"
                onClick={() => this.deleteTask(index)}
                type="button"
              >
                х
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
