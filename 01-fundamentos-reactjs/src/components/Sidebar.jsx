import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="../../assets/imagem.jpg" />
      <div className={styles.profile}>
        <img src="https://github.com/renatobh83.png" alt="" srcset="" />
        <strong>Renato</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
