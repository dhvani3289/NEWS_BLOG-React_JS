
import './BlogDetails.css'
import { Link } from 'react-router-dom'
function BlogDetails() {

    return (
        <>
            <div className="blogDetails">
                <h1>
                    We apologize, but this content is temporarily unavailable.
                </h1>
                <span> Go to <Link to="/">Homepage</Link>
                </span>

            </div>

        </>
    )
}

export default BlogDetails