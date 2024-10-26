import { Link } from 'react-router-dom'
import './header.css'
function Header() {

    return (
        <>
            <div className='header'>
                <div>
                    <h2>News Geek</h2>
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