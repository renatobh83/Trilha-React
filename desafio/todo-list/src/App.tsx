import { v4 as uuid } from "uuid";
import { Plus } from "phosphor-react";
import { Header } from "./components/Header";
import styles from "./App.module.css";

import logo from "./assets/Clipboard.svg";
import { TaskList } from "./components/TaskList";
import { ChangeEvent, useState } from "react";

interface Task {
  id: string;
  description: string;
  isComplete?: boolean;
}

export function App() {
  const getInitialState = localStorage.getItem("toDo");

  const [tasks, setTasks] = useState<Array<Task>>(() => {
    if (getInitialState) {
      return JSON.parse(getInitialState);
    }
    return [];
  });
  const [task, setTask] = useState("");
  const [totalComplete, setTotalComplete] = useState(() => {
    if (getInitialState) {
      return JSON.parse(getInitialState).filter(
        (t: { isComplete: boolean }) => t.isComplete === true
      ).length;
    }
    return 0;
  });

  function handleOnchange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function handleNewTask() {
    const newToDo = {
      id: uuid(),
      description: task,
      isComplete: false,
    };
    setTasks((stage) => {
      localStorage.setItem("toDo", JSON.stringify([...stage, newToDo]));
      return [...stage, newToDo];
    });

    setTask("");
  }
  function handleTaskOnchange(task: Task) {
    const total = tasks.filter((t) => {
      return t.isComplete === true;
    });
    setTotalComplete(total.length || 0);
  }

  function handleDeleteTask(task: Task) {
    if (task.isComplete) {
      setTotalComplete(totalComplete - 1);
    }
    const newToDo = tasks.filter((t) => {
      return t.id !== task.id;
    });
    localStorage.setItem("toDo", JSON.stringify(newToDo));
    setTasks(newToDo);
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.addTaskGroup}>
          <input
            type="text"
            value={task}
            onChange={handleOnchange}
            placeholder="Adicione uma nova tarefa"
          />
          <button onClick={handleNewTask} disabled={task.length === 0}>
            CRIAR <Plus size={16} />
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.criadas}>
              <span className={styles.create}> Tarefas Criadas</span>{" "}
              <span className={styles.counter}>{tasks.length}</span>
            </div>
            <div className={styles.done}>
              <span className={styles.done}>Concluidas</span>{" "}
              <span
                className={styles.counter}
              >{` ${totalComplete} de ${tasks.length}`}</span>
            </div>
          </div>
          <div className={styles.tasks}>
            {tasks.length === 0 ? (
              <div className={styles.empty}>
                <img src={logo} alt="" />
                <div className={styles.paragraph}>
                  <p>Você ainda não tem tarefas cadastradas</p>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
              </div>
            ) : (
              tasks.map((task) => {
                return (
                  <TaskList
                    key={task.id}
                    task={task}
                    onDeleteTask={handleDeleteTask}
                    onChangeTask={handleTaskOnchange}
                  />
                );
              })
            )}
          </div>
        </div>
      </main>
    </>
  );
}
