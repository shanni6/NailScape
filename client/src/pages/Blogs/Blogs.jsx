import "./Blogs.scss";
import { useEffect, useState } from "react";
import Blog from "./../../components/Blog/Blog";

function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs([
            {
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sem ut neque accumsan lobortis sed in arcu. Nulla quis venenatis odio. Pellentesque dictum, metus quis placerat pellentesque, diam enim rutrum nunc, eget vehicula lectus tortor nec ante. Nam justo nibh, sagittis nec pellentesque vel, tempus ut erat. Nunc finibus tellus quis dolor facilisis, id finibus enim venenatis. Vivamus luctus odio ut libero malesuada, nec sollicitudin neque gravida. Vestibulum et euismod mi. Quisque ex augue, faucibus non tempus et, ultrices non diam. Sed in vestibulum ex. Fusce ut massa mauris. Cras eu lacus egestas, pharetra magna nec, commodo nulla. Proin cursus orci purus, se",
                id: 1,
                image: "https://hips.hearstapps.com/hmg-prod/images/273912377-372031824314185-6626888513630609174-n-1676653877.jpg",
                timestamp: new Date(),
                title: "Title 1",
            },
            {
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sem ut neque accumsan lobortis sed in arcu. Nulla quis venenatis odio. Pellentesque dictum, metus quis placerat pellentesque, diam enim rutrum nunc, eget vehicula lectus tortor nec ante. Nam justo nibh, sagittis nec pellentesque vel, tempus ut erat. Nunc finibus tellus quis dolor facilisis, id finibus enim venenatis. Vivamus luctus odio ut libero malesuada, nec sollicitudin neque gravida. Vestibulum et euismod mi. Quisque ex augue, faucibus non tempus et, ultrices non diam. Sed in vestibulum ex. Fusce ut massa mauris. Cras eu lacus egestas, pharetra magna nec, commodo nulla. Proin cursus orci purus, se",
                id: 2,
                image: "https://img.fruugo.com/product/5/62/717980625_max.jpg",
                timestamp: new Date(),
                title: "Title 2",
            },
            {
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sem ut neque accumsan lobortis sed in arcu. Nulla quis venenatis odio. Pellentesque dictum, metus quis placerat pellentesque, diam enim rutrum nunc, eget vehicula lectus tortor nec ante. Nam justo nibh, sagittis nec pellentesque vel, tempus ut erat. Nunc finibus tellus quis dolor facilisis, id finibus enim venenatis. Vivamus luctus odio ut libero malesuada, nec sollicitudin neque gravida. Vestibulum et euismod mi. Quisque ex augue, faucibus non tempus et, ultrices non diam. Sed in vestibulum ex. Fusce ut massa mauris. Cras eu lacus egestas, pharetra magna nec, commodo nulla. Proin cursus orci purus, se",
                id: 3,
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjN_rJmZLTP8QfOhAklAqBqcdvaBX0GnaQNVhoRebkJ1LsKK8RWAxPJGK6sbi99tg8wI0YzhHCKhPPSmp90NqYBnhmrWyk5OMqru4_-Jnu8gRk-s0Ge6L5PSR6keyzEYu1Le5LRD9V0T_AWv-xwXNt1KLA0x6bJFvykX5lqO9PzzfCyVQWLWdbH04pH/s640/nail-art-cool-toned-fall-abstract-nails-2.png",
                timestamp: new Date(),
                title: "Title 3",
            },
        ]);
    }, []);

    return (
        <section className="flex flex-col gap-8 md:px-16 px-4">
            {blogs.map((blog) => (
                <Blog blog={blog} key={blog.id} />
            ))}
        </section>
    );
}

export default Blogs;
