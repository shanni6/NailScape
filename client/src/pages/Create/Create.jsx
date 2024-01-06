import "./Create.scss";
import "./quill.snow-custom.css";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";

function Create() {
    const [contentClassName, setContentClassName] = useState(
        "border border-gray-400 focus-within:border-pink-600 rounded shadow-md"
    );
    const content = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { "image-url": imageUrl, title } = e.target;
        let isValid = true;

        if (!title.value) {
            title.className = title.className.replace(
                "border-gray-400",
                "border-red-600"
            );
            isValid = false;
        } else {
            title.className = title.className.replace(
                "border-red-600",
                "border-gray-400"
            );
        }

        if (!content.current.value || content.current.value === "<p><br></p>") {
            setContentClassName(
                contentClassName.replace("border-gray-400", "border-red-600")
            );
            isValid = false;
        } else {
            setContentClassName(
                contentClassName.replace("border-red-600", "border-gray-400")
            );
        }

        if (!imageUrl.value) {
            imageUrl.className = imageUrl.className.replace(
                "border-gray-400",
                "border-red-600"
            );
            isValid = false;
        } else {
            imageUrl.className = imageUrl.className.replace(
                "border-red-600",
                "border-gray-400"
            );
        }

        if (isValid) {
            try {
                const { data } = await axios.post(
                    `${import.meta.env.VITE_API_URL}/blogs`,
                    {
                        content: content.current.value,
                        image_url: imageUrl.value,
                        title: title.value,
                    }
                );
                navigate(`/blogs/${data.id}`);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <section className="px-4">
            <h1 className="text-4xl text-purple-400">Create a Blog</h1>
            <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="title">Title:</label>
                    <input
                        className="border border-gray-400 focus:border-pink-600 outline-none px-2 py-1 rounded shadow-md"
                        id="title"
                        type="text"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <span>Content:</span>
                    <ReactQuill
                        className={contentClassName}
                        ref={content}
                        theme="snow"
                        value=""
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="image-url">Image URL:</label>
                    <input
                        className="border border-gray-400 focus:border-pink-600 outline-none px-2 py-1 rounded shadow-md"
                        id="image-url"
                        type="text"
                    />
                </div>
                <input
                    className="bg-[url('assets/images/background-button.png')] bg-center p-1 text-gray-50 shadow-md"
                    type="submit"
                    value="Submit"
                />
            </form>
        </section>
    );
}

export default Create;
