import { Avatar } from './Avatar'
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment() {
        onDeleteComment(content);
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/erosMariano.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eros Mariano</strong>
                            <time title="19 de Março às 17:42h" dateTime="2025-03-19 17:42:00">Publicado há 2h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar Comentario">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}