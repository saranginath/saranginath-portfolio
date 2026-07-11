import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message
                }, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            })

            toast.success("Message sent successfully!")
            setForm({
                name: "",
                email: "",
                message: "",
            });

        } catch (error) {
            setLoading(false);
            toast.error("Failed to send message");
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
            < h1 className="text-3xl font-bold text-center mb-10" >
                Contact Me
            </h1 >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">

                <div className="space-y-5">
                    <h2 className="text-2xl font-semibold">Get In Touch</h2>

                    <p className="text-gray-600">
                        Feel free to contact me for any work or suggestions.
                    </p>

                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-sky-500" />
                        <a
                            href="mailto:saranginath22@gmail.com"
                            className=" hover:text-sky-500"

                        >
                            Saranginath22@gmail.com
                        </a>
                    </div>

                    <div className="flex items-center gap-3">

                        <FaLinkedin className="text-sky-500" />
                        <a
                            href="https://www.linkedin.com/in/sarangi-nath/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-sky-500"

                        >
                            https://www.linkedin.com/in/sarangi-nath/
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaGithub className="text-sky-500" />
                        <a
                            href="https://github.com/saranginath"
                            target="_blank"
                            rel="noopener noreferrer" className="hover:text-sky-500"
                        >
                            https://github.com/saranginath
                        </a>
                    </div>
                </div>


                <div className="border rounded-lg p-8 shadow-md">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="flex flex-col">
                            <label className="mb-2 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-2 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-2 font-medium">Message</label>
                            <textarea
                                rows={5}
                                required
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-md bg-sky-300 text-white py-2 hover:bg-blue-500 transition"
                        >
                            {loading ? "sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section >
    );
}

export default Contact;