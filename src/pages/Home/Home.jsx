import { Link } from 'react-router-dom'
import './home.css'
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    let [blogContent, setBlogContent] = useState([]);
    let [category, setCategory] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            blogCardData();
            allCategories();
        }, 1000);
    }, [setBlogContent, setCategory])

    let blogCardData = () => {
        axios.get("http://localhost:3000/blogData")
            .then((res) => {
                console.log(res.data);
                setBlogContent(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
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

    let sortProductByCategory = ((v) => {
        console.log(v.category);
        if (v == 'home') {
            blogCardData();
        } else {
            axios.get(`http://localhost:3000/blogData?category=${v.category}`)
                .then((res) => {
                    console.log(res.data);
                    setBlogContent(res.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    })

    return (
        <>
            <div className="header-bottom">
                <Link to="/" onClick={() => sortProductByCategory("home")}>Home</Link>

                {category.map((v, i) => {
                    return (
                        <button onClick={() => sortProductByCategory(v)} >{v.category}</button>
                    )
                })
                }
            </div>
            <div className="container">
                <div className="row">
                    {blogContent.map((v, i) => {
                        return (
                            <>
                                <Link to="/blogDetails" style={{ display: 'contents' }}>
                                    <div className="col-4">
                                        <div className="blog-card-wrap">
                                            <div className="blog-img">
                                                {/* <img src={v.image} /> */}
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYF-0qIlSXQmQNiOgG--FOO3BmFHG9tbpRVg&s" alt="" />
                                            </div>
                                            <div className='blog-content'>
                                                <div className="title">
                                                    <h2>{v.title}</h2>
                                                </div>
                                                <div className="bloggerName">
                                                    - {v.bloggerName}
                                                </div>
                                                <h1>{v.category}</h1>
                                                <div className="blog-description">{v.description}
                                                </div>
                                                <div className='readMore-btn'>
                                                    <button>read more...</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Home