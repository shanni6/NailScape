import "./Blog.scss";
import { FaEllipsisV, FaRegCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

function Blog() {
    const [blog, setBlog] = useState({});
    const [comments, setComments] = useState([]);
    const [showBlogActions, setShowBlogActions] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const params = useParams();

    useEffect(() => {
        const fetchBlog = async () => {
            const { data } = await axios.get(
                `${import.meta.env.VITE_API_URL}/blogs/${params.id}`
            );
            setBlog(data);
        };
        fetchBlog();

        const fetchComments = async () => {
            const { data } = await axios.get(
                `${import.meta.env.VITE_API_URL}/blogs/${params.id}/comments`
            );
            setComments(data);
        };
        fetchComments();
    }, []);

    const handleSubmit = async (e) => {
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
            try {
                await axios.post(
                    `${import.meta.env.VITE_API_URL}/blogs/${blog.id}/comments`,
                    {
                        blog_id: blog.id,
                        comment: comment.value,
                        name: name.value,
                    }
                );

                const { data } = await axios.get(
                    `${import.meta.env.VITE_API_URL}/blogs/${
                        params.id
                    }/comments`
                );
                setComments(data);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div className="px-4">
            <section className="relative">
                {blog && (
                    <article className="flex flex-col gap-8 items-center">
                        <div className="absolute flex flex-col items-end right-0">
                            <FaEllipsisV
                                className="cursor-pointer text-xl text-gray-600"
                                onClick={() =>
                                    setShowBlogActions(!showBlogActions)
                                }
                            />
                            {showBlogActions && (
                                <div
                                    className="border flex flex-col mt-2 rounded shadow-md"
                                    onClick={() => {
                                        setShowBlogActions(false);
                                    }}
                                >
                                    <button className="bg-white p-2 px-4 py-2 rounded-t">
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-600 px-4 py-2 rounded-b text-white"
                                        onClick={() => {
                                            setShowDeleteModal(true);
                                            document.body.style.overflow =
                                                "hidden";
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                            {showDeleteModal && (
                                <DeleteModal
                                    blogId={blog.id}
                                    setShowDeleteModal={setShowDeleteModal}
                                    type="blog"
                                />
                            )}
                        </div>
                        <h1 className="pr-4 text-4xl text-purple-400">
                            {blog.title}
                        </h1>
                        <p className="flex flex-col items-center md:block md:text-left text-center">
                            <img
                                className="border-8 border-gray-50 h-48 mb-4 md:float-right md:h-48 md:ml-2 md:w-72 object-center object-cover shadow-lg w-3/4"
                                src={blog.image_url}
                            />
                            <span
                                className="content"
                                dangerouslySetInnerHTML={{
                                    __html: blog.content,
                                }}
                            ></span>
                        </p>
                        <p className="border-b border-t border-pink-400 flex gap-2 justify-center py-2 text-gray-600 text-xs w-3/4">
                            <FaRegCalendarAlt className="text-gray-400" />
                            {new Date(blog.created_at)?.toLocaleDateString(
                                "en-CA",
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }
                            )}
                        </p>
                    </article>
                )}
            </section>

            <section>
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

                <h2 className="text-2xl mb-4 mt-8 text-purple-400">Comments</h2>
                <div className="flex flex-col gap-8">
                    {comments &&
                        comments?.map((comment) => (
                            <Comment
                                blogId={blog.id}
                                comment={comment}
                                key={comment.id}
                                setComments={setComments}
                            />
                        ))}
                </div>
            </section>
        </div>
    );
}

function Comment({ blogId, comment, setComments }) {
    const [showCommentActions, setShowCommentActions] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <article className="border flex flex-col gap-2 px-4 py-2 relative rounded shadow-md">
            <div className="absolute flex flex-col items-end right-1 top-3">
                <FaEllipsisV
                    className="cursor-pointer text-lg text-gray-600"
                    onClick={() => setShowCommentActions(true)}
                />
                {showCommentActions && (
                    <div
                        className="border flex flex-col mt-2 rounded shadow-md"
                        onClick={() => setShowCommentActions(false)}
                    >
                        <button
                            className="bg-red-600 p-2 rounded text-sm text-white"
                            onClick={() => {
                                setShowDeleteModal(true);
                                document.body.style.overflow = "hidden";
                            }}
                        >
                            Delete
                        </button>
                    </div>
                )}
                {showDeleteModal && (
                    <DeleteModal
                        blogId={blogId}
                        commentId={comment.id}
                        setComments={setComments}
                        setShowDeleteModal={setShowDeleteModal}
                        type="comment"
                    />
                )}
            </div>
            <h3 className="text-xl text-purple-400">{comment.name}</h3>
            <p>{comment.content}</p>
            <p className="text-gray-600 text-xs w-3/4">
                {new Date(comment.created_at)?.toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </p>
        </article>
    );
}

export default Blog;
