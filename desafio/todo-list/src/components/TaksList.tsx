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
    if (event.target.checked) {
      task.isComplete = true;
    } else {
      task.isComplete = false;
    }
    onChangeTask(task);
  }

  function handleDelete() {
    onDeleteTask(task);
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskText}>
        <input
          type="checkbox"
          name="check"
          id={task.id}
          onChange={handleChecked}
        />
        <span>
          <label htmlFor={task.id} className={styles.inner}></label>
        </span>
        <p className={styles.teste}>{task.description}</p>
      </div>
      <button onClick={handleDelete}>
        <Trash />
      </button>
    </div>
  );
}
