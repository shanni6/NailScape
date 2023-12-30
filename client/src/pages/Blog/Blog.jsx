import "./Blog.scss";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

function Blog() {
    const [blog, setBlog] = useState({});

    useEffect(() => {
        setBlog({
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sem ut neque accumsan lobortis sed in arcu. Nulla quis venenatis odio. Pellentesque dictum, metus quis placerat pellentesque, diam enim rutrum nunc, eget vehicula lectus tortor nec ante. Nam justo nibh, sagittis nec pellentesque vel, tempus ut erat. Nunc finibus tellus quis dolor facilisis, id finibus enim venenatis. Vivamus luctus odio ut libero malesuada, nec sollicitudin neque gravida. Vestibulum et euismod mi. Quisque ex augue, faucibus non tempus et, ultrices non diam. Sed in vestibulum ex. Fusce ut massa mauris. Cras eu lacus egestas, pharetra magna nec, commodo nulla. Proin cursus orci purus, se",
            id: 1,
            image: "https://hips.hearstapps.com/hmg-prod/images/273912377-372031824314185-6626888513630609174-n-1676653877.jpg",
            timestamp: new Date(),
            title: "Title 1",
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;

        const { comment, name } = e.target;

        if (!comment.value) {
            comment.className = comment.className.replace(
                "border-gray-400",
                "border-red-600"
            );
            isValid = false;
        } else {
            comment.className = comment.className.replace(
                "border-red-600",
                "border-gray-400"
            );
        }

        if (!name.value) {
            name.className = name.className.replace(
                "border-gray-400",
                "border-red-600"
            );
            isValid = false;
        } else {
            name.className = name.className.replace(
                "border-red-600",
                "border-gray-400"
            );
        }

        if (isValid) {
            console.log("Form Submitted");
        }
    };

    return (
        <section className="px-4">
            <article className="flex flex-col gap-8 items-center">
                <h1 className="text-4xl text-purple-400">{blog.title}</h1>
                <p className="flex flex-col items-center md:block md:text-left text-center">
                    <img
                        className="border-8 border-gray-50 h-48 mb-4 md:float-right md:h-48 md:ml-2 md:w-72 object-center object-cover shadow-lg w-3/4"
                        src={blog.image}
                    />
                    {blog.content}
                </p>
                <p className="border-b border-t border-pink-400 flex gap-2 justify-center py-2 text-gray-600 text-xs w-3/4">
                    <FaRegCalendarAlt className="text-gray-400" />
                    {blog.timestamp?.toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>
            </article>

            <h2 className="text-2xl mb-2 mt-8 text-purple-400">
                Leave a comment
            </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label className="text-gray-600" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="border border-gray-400 focus:border-pink-600 outline-none px-2 py-1 rounded"
                        id="name"
                        type="text"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-gray-600" htmlFor="comment">
                        Comment
                    </label>
                    <textarea
                        className="border border-gray-400 focus:border-pink-600 outline-none px-2 py-1 rounded"
                        id="comment"
                    ></textarea>
                </div>

                <input
                    className="bg-[url('assets/images/background-button.png')] bg-center p-1 text-gray-50"
                    type="submit"
                    value="Submit"
                />
            </form>
        </section>
    );
}

export default Blog;
