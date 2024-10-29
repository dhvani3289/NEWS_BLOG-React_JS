import { Link } from 'react-router-dom'
import './header.css'
function Header() {

    return (
        <>
            <div className='header'>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px" }}>
                    <h2>News Geek</h2>
                    <Link to="/">HOME</Link>
                </div>
                <div>
                    <Link to="/addCategory">ADD CATEGORY</Link>
                    <Link to="/addBlog">ADD BLOG</Link>
                </div>
            </div>
        </>
    )
}

export default Header;