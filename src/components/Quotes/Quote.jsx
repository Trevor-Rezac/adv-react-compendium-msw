export default function Quote({ quote }) {
  return (
    <>
    <img src={`${quote.img}`} alt='simpson character image'/>
    <p>"{quote.quote}"</p>
    <p>-{quote.character}</p>
    </>
  )
}
