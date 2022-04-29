import QuoteList from './QuoteList'
import styles from './QuotePage.css'

export default function QuotePage() {

  return (
    <div className={styles['quote-page']}>
      <h1>Simpsons Quote Generator</h1>
      <QuoteList />
    </div>
  )
}
