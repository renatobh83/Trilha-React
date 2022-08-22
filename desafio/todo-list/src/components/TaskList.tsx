import { Trash } from "phosphor-react";
import { ChangeEvent, useEffect } from "react";
import styles from "./TaskList.module.css";

interface TaskListProps {
  task: {
    description: string;
    id: string;
    isComplete?: boolean;
  };
  onDeleteTask: (task: any) => void;
  onChangeTask: (task: any) => void;
}

export function TaskList({ task, onDeleteTask, onChangeTask }: TaskListProps) {
  function handleChecked(event: ChangeEvent<HTMLInputElement>) {
    const lsTasks = localStorage.getItem("toDo");
    let updateTask = [];
    if (lsTasks) {
      let oldTask = JSON.parse(lsTasks).filter(
        (t: { id: string }) => t.id !== task.id
      );
      updateTask = oldTask;
    }

    if (event.target.checked) {
      task.isComplete = true;
    } else {
      task.isComplete = false;
    }
    updateTask.push(task);
    localStorage.setItem("toDo", JSON.stringify(updateTask));
    onChangeTask(task);
  }

  function handleDelete() {
    onDeleteTask(task);
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskText}>
        <label className={styles.checkboxContainer}>
          <input
            type="checkbox"
            readOnly
            checked={task.isComplete}
            onChange={handleChecked}
          />
          <span className={styles.checkmark}></span>
        </label>
        <p className={task.isComplete ? `${styles.completed}` : ""}>
          {task.description}
        </p>
      </div>
      <button onClick={handleDelete}>
        <Trash />
      </button>
    </div>
  );
}
