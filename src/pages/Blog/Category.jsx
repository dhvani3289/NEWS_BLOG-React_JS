import { useEffect, useState } from "react";
import './blog.css'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { blog } from "../Redux/Actions/BlogActions";


function Category() {

    let [blogData, setBlogData] = useState({});
    let [blogContent, setBlogContent] = useState([]);
    let dispatch = useDispatch();

    let selector = useSelector((state) => state.blogRoot.blogData)
    console.log(selector, "selector");

    useEffect(() => {
        setTimeout(() => {
            blogCardData();
        }, 1000);
    }, [setBlogContent, setBlogData])

    let handleChange = (e) => {
        let { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value });
    }
    console.log(blogData);

    let addBlogData = async (e) => {
        e.preventDefault();
        let blogContent = await axios.post("http://localhost:3000/categories", blogData);
        dispatch(blog(blogContent.data))
    }

    let blogCardData = () => {
        axios.get("http://localhost:3000/categories")
            .then((res) => {
                console.log(res.data);
                setBlogContent(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <form method="post" onSubmit={(e) => addBlogData(e)}>
                <table border={1} align="center" cellPadding={10}>
                    <thead>
                        <tr>
                            <td>Category</td>
                            <td>
                                <input type="text" name="category" placeholder="Category" onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="add-btn">
                                <button type="submit">Add Category</button>
                            </td>
                        </tr>
                    </thead>
                </table>
            </form>
        </>
    )
}

export default Category



