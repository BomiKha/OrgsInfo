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

export default App