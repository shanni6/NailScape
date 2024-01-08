import "./Contact.scss";
import { useNavigate } from "react-router-dom";

function Contact() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, message, name } = e.target;
        let isValid = true;

        if (!email.value) {
            email.className = email.className.replace(
                "border-gray-400",
                "border-red-600"
            );
            isValid = false;
        } else {
            email.className = email.className.replace(
                "border-red-600",
                "border-gray-400"
            );
        }

        if (!message.value) {
            message.className = message.className.replace(
                "border-gray-400",
                "border-red-600"
            );
            isValid = false;
        } else {
            message.className = message.className.replace(
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
            alert("Thank you for contacting us!");
            navigate("/");
        }
    };

    return (
        <section className="px-4">
            <h1 className="text-4xl text-purple-400">Contact</h1>
            <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name">Name:</label>
                    <input
                        className="border border-gray-400 focus:border-pink-600 outline-none px-2 py-1 rounded shadow-md"
                        id="name"
                        type="text"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email">E-Mail:</label>
                    <input
                        className="border border-gray-400 focus:border-pink-600 outline-none px-2 py-1 rounded shadow-md"
                        id="email"
                        type="email"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        className="border border-gray-400 focus:border-pink-600 h-32 outline-none px-2 py-1 rounded shadow-md"
                        name="message"
                    ></textarea>
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

export default Contact;
