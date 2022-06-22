import { v4 as uuid } from "uuid";
import { Plus } from "phosphor-react";
import { Header } from "./components/Header";
import styles from "./App.module.css";

import logo from "./assets/Clipboard.svg";
import { TaskList } from "./components/TaksList";
import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from "react";

interface Task {
  id: string;
  description: string;
  isComplete?: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [task, setTask] = useState("");
  const [totalComplete, setTotalComplete] = useState(0);

  function handleOnchange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }
  function handleNewTask() {
    const newTask = {
      id: uuid(),
      description: task,
      isComplete: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
  }
  function handleTaskOnchange(task: Task) {
    const total = tasks.filter((t) => {
      return t.isComplete === true;
    });
    setTotalComplete(total.length || 0);
  }
  function handleDeleteTask(task: Task) {
    const newtasks = tasks.filter((t) => {
      return t.id !== task.id;
    });
    if (newtasks.length === 0) setTotalComplete(0);
    setTasks(newtasks);
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
              >{`${totalComplete} de ${tasks.length}`}</span>
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
