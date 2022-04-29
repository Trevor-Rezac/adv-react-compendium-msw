import { useState, useEffect } from 'react'
import CharacterDropdown from '../../components/Quotes/CharacterDropdown';
import Quote from '../../components/Quotes/Quote';
import styles from './QuoteList.css'

export default function QuoteList() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [characterId, setCharacterId] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const characterQuotes = !filteredCharacters.length ? quotes : filteredCharacters

useEffect(() => {
  const getQuotes = async () => {
    setIsLoading(true)
    const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=10')
    const data = await res.json();
    const quotesArr = data.map((quote) => ({
      character: quote.character,
      quote: quote.quote,
      img: quote.image
    }))
    setQuotes(quotesArr);
    setIsLoading(false)
  }
  getQuotes();
}, []);

useEffect(() => {
  const getCharacterQuotes = async () => {
    setIsLoading(true)
    const res = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=10&character=${characterId}`)
    const data = await res.json();
    console.log('data!!!!', data)
    const characterArr = data.map((quote) => ({
      character: quote.character,
      quote: quote.quote,
      img: quote.image
    }))
    setFilteredCharacters(characterArr);
    console.log('filteredCharacters!!!!!', filteredCharacters);
    setIsLoading(false)
  }
  getCharacterQuotes();
}, [characterId]);

  return (
    <>
      <CharacterDropdown setCharacterId={setCharacterId}/>
      {isLoading
      ? (<p>Loading...</p>)
      : <div className={styles['quote-list']}>
          {characterQuotes.map((quote) => <Quote quote={quote} key={`${quote.character}-${quote.quote}`}/>)}
        </div>}
    </>
  )
}
