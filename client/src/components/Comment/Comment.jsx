import "./Comment.scss";
import { FaEllipsisV } from "react-icons/fa";
import { useState } from "react";
import DeleteModal from "./../DeleteModal/DeleteModal";

function Comment({ blogId, comment, setComments }) {
    const [showCommentActions, setShowCommentActions] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <article className="border flex flex-col gap-2 px-4 py-2 relative rounded shadow-md">
            <div className="absolute flex flex-col items-end right-1 top-3">
                <FaEllipsisV
                    className="cursor-pointer text-lg text-gray-600"
                    onClick={() => setShowCommentActions(!showCommentActions)}
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

export default Comment;
