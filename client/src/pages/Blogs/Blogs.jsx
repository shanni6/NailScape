import "./Blogs.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./../../components/Blog/Blog";

function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const { data } = await axios.get(
                `${import.meta.env.VITE_API_URL}/blogs`
            );
            setBlogs(data);
        };
        fetchBlogs();
    }, []);

    return (
        <section className="flex flex-col gap-8 md:px-16 px-4">
            {blogs && blogs.map((blog) => <Blog blog={blog} key={blog.id} />)}
        </section>
    );
}

export default Blogs;
