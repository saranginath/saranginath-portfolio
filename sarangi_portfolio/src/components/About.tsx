import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import saraninath from "../assets/saranginath.jpeg";
import { Typewriter } from "react-simple-typewriter";
import { about } from "../data/about";
import { motion } from "framer-motion"
function About() {
    return (
        <section id="about" className="max-w-7xl mx-auto px-6 py-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold">
                        <span className="bg-linear-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                            <Typewriter
                                words={[
                                    "Full Stack Developer",
                                    "Backend Developer",
                                    "Software Engineer",
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={60}
                                delaySpeed={1200}
                            />
                        </span>
                    </h2>

                    <p className=" text-lg leading-8 whitespace-pre-line text-justify">
                        {about}
                    </p>
                </div>


                <div className="flex flex-col gap-6 items-center">

                    <motion.img
                        src={saraninath}
                        className="w-90 rounded"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />

                    <div className="flex gap-6 text-2xl">

                        <a
                            href="mailto:saranginath22@gmail.com"
                            className=" border p-2 rounded-lg transition-transform duration-300 hover:scale-110"
                        >
                            <FaEnvelope />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/sarangi-nath/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-300 hover:scale-110 border p-2 rounded-xl"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://github.com/saranginath"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-300 hover:scale-110 dark:hover:text-white border p-2 rounded-lg"
                        >
                            <FaGithub />
                        </a>

                    </div>
                </div>

            </div>
        </section >
    );
}

export default About;