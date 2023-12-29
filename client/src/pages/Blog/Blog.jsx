import "./Blog.scss";
import { useEffect, useState } from "react";
import BlogComponent from "./../../components/Blog/Blog";

function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs([
            {
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sem ut neque accumsan lobortis sed in arcu. Nulla quis venenatis odio. Pellentesque dictum, metus quis placerat pellentesque, diam enim rutrum nunc, eget vehicula lectus tortor nec ante. Nam justo nibh, sagittis nec pellentesque vel, tempus ut erat. Nunc finibus tellus quis dolor facilisis, id finibus enim venenatis. Vivamus luctus odio ut libero malesuada, nec sollicitudin neque gravida. Vestibulum et euismod mi. Quisque ex augue, faucibus non tempus et, ultrices non diam. Sed in vestibulum ex. Fusce ut massa mauris. Cras eu lacus egestas, pharetra magna nec, commodo nulla. Proin cursus orci purus, se",
                id: 1,
                timestamp: new Date(),
                title: "Title 1",
            },
            {
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sem ut neque accumsan lobortis sed in arcu. Nulla quis venenatis odio. Pellentesque dictum, metus quis placerat pellentesque, diam enim rutrum nunc, eget vehicula lectus tortor nec ante. Nam justo nibh, sagittis nec pellentesque vel, tempus ut erat. Nunc finibus tellus quis dolor facilisis, id finibus enim venenatis. Vivamus luctus odio ut libero malesuada, nec sollicitudin neque gravida. Vestibulum et euismod mi. Quisque ex augue, faucibus non tempus et, ultrices non diam. Sed in vestibulum ex. Fusce ut massa mauris. Cras eu lacus egestas, pharetra magna nec, commodo nulla. Proin cursus orci purus, se",
                id: 2,
                timestamp: new Date(),
                title: "Title 2",
            },
            {
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sem ut neque accumsan lobortis sed in arcu. Nulla quis venenatis odio. Pellentesque dictum, metus quis placerat pellentesque, diam enim rutrum nunc, eget vehicula lectus tortor nec ante. Nam justo nibh, sagittis nec pellentesque vel, tempus ut erat. Nunc finibus tellus quis dolor facilisis, id finibus enim venenatis. Vivamus luctus odio ut libero malesuada, nec sollicitudin neque gravida. Vestibulum et euismod mi. Quisque ex augue, faucibus non tempus et, ultrices non diam. Sed in vestibulum ex. Fusce ut massa mauris. Cras eu lacus egestas, pharetra magna nec, commodo nulla. Proin cursus orci purus, se",
                id: 3,
                timestamp: new Date(),
                title: "Title 3",
            },
        ]);
    }, []);

    return (
        <section className="flex flex-col gap-8 px-4">
            <h1 className="text-4xl text-purple-950">Blog</h1>
            {blogs.map((blog) => (
                <BlogComponent blog={blog} key={blog.id} />
            ))}
        </section>
    );
}

export default Blog;
