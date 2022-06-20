import { Comment } from "./Comment";
import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/renatobh83.png" />
          <div className={styles.authorInfo}>
            <strong>Renato Lucio</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time dataTime="2022-05-11 08:00:30">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p> Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">jane.design/doctorcare </a>
        </p>
        <p> #novoprojeto #nlw #rocketseat</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentario</strong>
        <textarea placeholder="Deixe um comentario" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
