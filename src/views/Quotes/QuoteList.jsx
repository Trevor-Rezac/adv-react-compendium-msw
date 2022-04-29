import { useState, useEffect } from 'react'
import Quote from '../../components/Quotes/Quote';

export default function QuoteList() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  const getQuotes = async () => {
    const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=10')
    const data = await res.json();
    console.log('data', data)
    const quotesArr = data.map((quote) => ({
      character: quote.character,
      quote: quote.quote,
      img: quote.image
    }))
    setQuotes(quotesArr);
    setIsLoading(false)
  }
  getQuotes();
}, [])

  return (
    <>
    {quotes.map((quote) => <Quote quote={quote} />)}
    </>
  )
}
