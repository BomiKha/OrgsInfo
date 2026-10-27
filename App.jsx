import { Routes, Route, Link } from 'react-router-dom'

const Home = () => <h2>Home</h2>
const Notes = () => <h2>Notes</h2>
const Users = () => <h2>Users</h2>

const App = () => {
    const padding = { padding: 5}

    return (
        <div>
            <nav>
                <Link style={padding} to="/">home</Link>
                <Link style={padding} to="/notes">notes</Link>
                <Link style={padding} to="/user">user</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/users" element={<Users />} />
            </Routes>

            <footer>Note app, 2026</footer>
        </div>
    )
}