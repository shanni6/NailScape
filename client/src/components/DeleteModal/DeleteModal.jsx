import "./DeleteModal.scss";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DeleteModal({
    blogId,
    commentId,
    setComments,
    setShowDeleteModal,
    type,
}) {
    const navigate = useNavigate();

    const handleDelete = async () => {
        if (type === "blog") {
            try {
                await axios.delete(
                    `${import.meta.env.VITE_API_URL}/blogs/${blogId}`
                );
                closeModal();
                navigate("/blogs");
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                await axios.delete(
                    `${
                        import.meta.env.VITE_API_URL
                    }/blogs/${blogId}/comments/${commentId}`
                );
                setShowDeleteModal(false);
                const { data } = await axios.get(
                    `${import.meta.env.VITE_API_URL}/blogs/${blogId}/comments`
                );
                setComments(data);
                closeModal();
            } catch (error) {
                console.error(error);
            }
        }
    };

    const closeModal = () => {
        setShowDeleteModal(false);
        document.body.style.overflow = "auto";
    };

    return (
        <div className="bg-gray-950/50 fixed flex items-center justify-center h-screen left-0 top-0 w-screen z-50">
            <section className="bg-white flex flex-col gap-8 max-w-sm mx-4 p-4 rounded shadow w-full">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg">Are you sure?</h3>
                    <button onClick={closeModal}>
                        <IoClose />
                    </button>
                </div>
                <div className="flex items-center justify-between">
                    <button onClick={closeModal}>Cancel</button>
                    <button
                        className="bg-red-600 p-2 rounded text-white"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </section>
        </div>
    );
}

export default DeleteModal;
