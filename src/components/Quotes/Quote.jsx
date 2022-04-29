import styles from './Quote.css'
export default function Quote({ quote }) {
  return (
    <div className={styles['character-card']}>
    <img src={`${quote.img}`} alt='simpson character image'/>
    <p>"{quote.quote}"</p>
    <p>-{quote.character}</p>
    </div>
  )
}
