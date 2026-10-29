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

const toggleImprtanceOf = (id0 => {
    const url = 'http://localhost:3001/notes/${id}'
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    axios.put(url, changedNote).then(response => {
        setNotes(notes.map(n => (n.id === id ? response.data : n)))
    })
})

axios.delete('http://localhost:3001/notes/${id}').then(() => {
})

export default App