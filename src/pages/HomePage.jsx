import { Link } from 'react-router-dom';
localStorage.setItem("role","hi");

function HomePage() {
    return(
        <div>
            <h2> Welcome</h2>
            <nav>
                <ul>
                    <li><Link to="/signup">Sign Up</Link></li><br />
                    <li><Link to="/signin">Sign In</Link></li><br />
                </ul>
            </nav>
        </div>
    );
}

export default HomePage