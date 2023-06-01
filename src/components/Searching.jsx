import { useRef, useState } from "react"

export default function Searching() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState("")
  const inputRef = useRef()

  const filteredItems = items.filter(item => {
    return item.toLowerCase().includes(query.toLowerCase())
  })

  function onSubmit(e) {
    e.preventDefault()

    const value = inputRef.current.value
    if (value === "") return
    setItems(prev => {
      return [...prev, value]
    })

    inputRef.current.value = ""
  }

  return (
    <>
      <div className="flex mb-3">
        <h1>Search:</h1>
        <input className="border border-black" value={ query } onChange={e => setQuery(e.target.value)} type="search" />
      </div>
      <form onSubmit={onSubmit}>
        New Item: <input className="border border-black" ref={ inputRef } type="text" />
        <button type="submit" className="bg-teal-600 text-white py-1 px-2 ms-2 rounded">Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map(item => (
        // eslint-disable-next-line react/jsx-key
        <div>{item}</div>
      ))}
    </>
  )
}