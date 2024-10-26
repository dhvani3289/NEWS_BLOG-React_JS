import { useEffect, useState } from "react";
import './blog.css'
import axios from "axios";
import { useDispatch } from "react-redux";


function Blog() {

    let [blogData, setBlogData] = useState({});
    let dispatch = useDispatch();

    let [category, setCategory] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            allCategories();
        }, 1000);
    }, [setCategory])


    let handleChange = (e) => {
        let { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value });
    }
    console.log(blogData, "blofdata");

    let submitData = async (e) => {
        e.preventDefault();
        let blog = await axios.post("http://localhost:3000/blogData", blogData);
        dispatch(blog(blog.data));
        window.location = "./";
    }

    let allCategories = () => {
        axios.get("http://localhost:3000/categories")
            .then((res) => {
                console.log(res.data);
                setCategory(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <form method="post" onSubmit={(e) => submitData(e)}>
                <table border={1} align="center" cellPadding={10}>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>
                                <input type="text" name="title" placeholder="Title" onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td> Description</td>
                            <td>
                                <textarea name="description" placeholder="Description" onChange={(e) => handleChange(e)} cols={21} rows={3}></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td> Blogger Name </td>
                            <td>
                                <input type="text" name="bloggerName" placeholder="Blogger Name" onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>


                                <select name="category" onChange={(e) => handleChange(e)}>

                                    {category.map((v, i) => {
                                        return (
                                            <option value={v.category}>{v.category}</option>
                                        )
                                    })
                                    }

                                    {/* <option value="technology">Technology</option>
                                    <option value="sports">Sports</option>
                                    <option value="business">Business</option>
                                    <option value="health">Health</option>
                                    <option value="science">Science</option> */}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td> Image </td>
                            <td>
                                <input type="text" placeholder="image url" name="image" onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="add-btn">
                                <button type="submit">Add Blog</button>
                            </td>
                        </tr>
                    </thead>
                </table>
            </form>
        </>
    )
}

export default Blog