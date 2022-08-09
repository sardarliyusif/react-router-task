import { Link } from 'react-router-dom';

export function Profile() {
    return <div>
        <h1>
            hello from profile
        </h1>
        <nav>
            <Link to="/">Home</Link>
            <br />
            <Link to="/about">About</Link>
        </nav>
    </div>
}