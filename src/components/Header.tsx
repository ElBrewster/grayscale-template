import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="./">
                <h1>Grayscale Template</h1> 
            </Link>
        </header>
    );
}