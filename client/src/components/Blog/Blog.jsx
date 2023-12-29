import "./Blog.scss";
import { Link } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";

function Blog({ blog }) {
    return (
        <article className="flex flex-col gap-4 items-center text-center">
            <h2 className="hover:underline text-2xl text-pink-500">
                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
            </h2>
            <img
                className="border-8 border-gray-50 h-36 mb-2 md:h-56 md:w-96 object-center object-cover shadow-lg w-52"
                src={blog.image}
            />
            <p>{blog.content.substring(0, 200)}...</p>
            <Link
                className="bg-[url('assets/images/background-button.png')] bg-cover bg-no-repeat hover:underline p-2 text-gray-50 text-sm"
                to={`/blog/${blog.id}`}
            >
                Read More
            </Link>
            <p className="border-b border-t border-pink-400 flex gap-2 justify-center py-2 text-gray-600 text-xs w-3/4">
                <FaCalendar className="text-gray-400" />
                {blog.timestamp.toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </p>
        </article>
    );
}

export default Blog;
