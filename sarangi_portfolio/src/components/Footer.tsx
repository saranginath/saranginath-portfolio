import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t  py-10">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-3 gap-10">

                    {/* About */}
                    <div className="flex flex-col gap-3">
                        <h1 className="text-2xl font-bold">Sarangi Nath</h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            Software Engineer with a passion for creating innovative, scalable, and high-performance solutions.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-xl font-bold">Links</h2>

                        <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-300">
                            <a href="#about" className="hover:text-blue-500">About</a>
                            <a href="#experience" className="hover:text-blue-500">Experience</a>
                            <a href="#education" className="hover:text-blue-500">Education</a>
                            <a href="#contact" className="hover:text-blue-500">Contact Me</a>
                        </div>
                    </div>

                    {/* Connect */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-xl font-bold">Connect</h2>

                        <div className="flex gap-5 text-2xl">
                            <a
                                href="https://www.linkedin.com/in/sarangi-nath/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://github.com/saranginath"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-800 dark:hover:text-white"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="mailto:saranginath22@gmail.com"
                                className="hover:text-red-500"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="text-center border-t mt-10 pt-6 text-sm text-gray-500 dark:text-gray-400">
                    &copy; {currentYear} Sarangi Nath. All rights reserved.
                </div>

            </div>
        </footer>
    );
}

export default Footer;