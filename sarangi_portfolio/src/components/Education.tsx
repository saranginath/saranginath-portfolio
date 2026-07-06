import { motion } from "framer-motion";
import { education } from "../data/education";

function Education() {
    return (
        <section
            id="education"
            className="max-w-7xl mx-auto px-6 pt-16"
        >
            <motion.h1
                className="text-4xl font-bold text-center mb-5"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Education
            </motion.h1>

            <div className="flex flex-col gap-4">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.2,
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.03,
                            y: -5,
                        }}
                        className="rounded-xl border p-6 shadow-sm hover:shadow-xl "
                    >
                        <h3 className="text-2xl font-semibold">
                            {edu.degree}
                        </h3>

                        <p className="mt-2 text-lg text-gray-700 ">
                            {edu.college}
                        </p>

                        <div className="mt-3 flex flex-col sm:flex-row sm:justify-between text-gray-500">
                            <span>{edu.duration}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Education;