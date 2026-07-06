import { motion } from "framer-motion";

function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white gap-9">
            <motion.h1
                animate={{ rotate: 360 }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="text-6xl font-bold"
            >
                <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {"</>"}
                </span>
            </motion.h1>
            <p>COMPILING PORTFOLIO ...</p>
        </div>
    );
}

export default Loader;