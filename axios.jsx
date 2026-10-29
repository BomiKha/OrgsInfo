import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:3001/notes')
        .then(response => {
            setNotes(response.data) 
        })
}, [])

return (
    <ul>
        {notes.map(note => (
            <li key={note.id}>{note.content}</li>
        ))}
    </ul>
)
}

const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
        content: newNote,
        important: Math.random() < 0.5,
    }

    axios
    .post('http://localhost.3001/notes', noteObject)
    .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('')
    })
}

export default App