import React from 'react'

export default function CharacterDropdown({ setCharacterId }) {

  function handleChange(e) {
    setCharacterId(e.target.value)
  }

  return (
    <>
      <div>
        Select a character:
      </div>
      <select onChange={handleChange}>
        <option value="Homer Simpson">Homer Simpson</option>
        <option value='Bart Simpson'>Bart Simpson</option>
        <option value='Lisa Simpson'>Lisa Simpson</option>
        <option value='Marge Simpson'>Marge Simpson</option>
        <option value='Abe Simpson'>Abe Simpson</option>
        <option value='Milhouse Van Houten'>Milhouse Van Houten</option>
        <option value='Mr. Burns'>Mr. Burns</option>
        <option value='Moe Szyslak'>Moe Szyslak</option>
        <option value='Principal Skinner'>Principal Skinner</option>
        <option value='Apu'>Apu</option>
        <option value='Chief Wiggum'>Chief Wiggum</option>
        <option value='Ralph Wiggum'>Ralph Wiggum</option>
        <option value='Nelson Muntz'>Nelson Muntz</option>
        <option value='Waylon Smithers'>Waylon Smithers</option>
        <option value='Frank Grimes'>Frank Grimes</option>
        <option value='Dr. Nick'>Dr. Nick</option>
        <option value='Rainier Wolfcastle'>Rainier Wolfcastle</option>
        <option value='Duffman'>Duffman</option>
        <option value='Otto'>Otto</option>
        <option value='Groundskeeper Willie'>Groundskeeper Willie</option>
        <option value='Mayor Quimby'>Mayor Quimby</option>
        <option value='Troy McClure'>Troy McClure</option>
        <option value='Comic Book Guy'>Comic Book Guy</option>
      </select>
    </>
  )
}
