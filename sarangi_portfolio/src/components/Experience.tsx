import { experience } from "../data/experience";
import { motion } from "framer-motion";

function Experience() {
    return (
        <section id="experience" className="max-w-7xl mx-auto px-6 py-16">

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-14"
            >
                Work Experience
            </motion.h2>

            <div className="relative">


                <div className="absolute left-3 top-0 h-full w-1 bg-linear-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

                {experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="relative flex gap-8 pb-12"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.2
                        }}
                        viewport={{ once: true }}
                    >

                        {/* Timeline Dot */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="z-10 mt-2 h-6 w-6 rounded-full bg-linear-to-r from-blue-500 to-purple-500 border-4 border-white shadow-md"
                        />

                        {/* Content Card */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="w-full rounded-xl border  p-6 shadow-md hover:shadow-xl"
                        >
                            <h3 className="text-2xl font-semibold ">
                                {exp.role}
                            </h3>

                            <div className="flex justify-between mt-1 text-sm">
                                <span className="text-green-400">{exp.company}</span>
                                <span className="border rounded-lg text-gray-400 p-1">{exp.duration}</span>
                            </div>

                            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Experience;