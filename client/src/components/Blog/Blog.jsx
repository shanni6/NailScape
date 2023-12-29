import "./Blog.scss";
import { Link } from "react-router-dom";

function Blog({ blog }) {
    return (
        <article className="flex flex-col gap-4 items-center text-center">
            <h2 className="text-2xl text-pink-500">{blog.title}</h2>
            <p>{blog.content.substring(0, 200)}...</p>
            <Link
                className="bg-[url('assets/images/background-button.png')] bg-cover bg-no-repeat hover:underline p-2 text-gray-50 text-sm"
                to={`/blog/${blog.id}`}
            >
                Read More
            </Link>
            <p className="text-gray-600 text-xs">
                {blog.timestamp.toUTCString()}
            </p>
        </article>
    );
}

export default Blog;
