import { motion } from "framer-motion";

function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white gap-9">
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="text-4xl font-bold"
            >
                <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {"</>"}
                </span>{" "}
                Sarangi Nath
            </motion.h1>

            <div className="flex flex-col items-center">
                <div className="h-20 w-20 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

                <h2 className="mt-6 text-3xl font-bold animate-pulse">
                    Loading...
                </h2>
            </div>
        </div>
    );
}

export default Loader;