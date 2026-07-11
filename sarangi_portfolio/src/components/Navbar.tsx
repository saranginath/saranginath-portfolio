import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="sticky top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 text-black px-2 dark:text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-2 py-4">
                <h1 className="text-lg font-semibold">{"< / >"} Sarangi Nath TK</h1>
                <div className="hidden md:flex gap-7 items-center">
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#education">Education</a>
                    <a href="#contact">Contact</a>
                    <a
                        href="https://drive.google.com/file/d/1F2ok13tp9GgQ-S6or2PNtWPJB9CFYIfg/view" className="border rounded p-2 hover:bg-blue-500" target="_blank"
                    >
                        Resume
                    </a>
                    <ThemeToggle />

                </div>
                <div className="md:hidden flex gap-4">
                    <ThemeToggle />
                    <button className=" text-xl" onClick={() => setOpen((prev) => !prev)}>{open ? <FaTimes /> : <FaBars />}</button>
                </div>

            </div>

            {
                open && (
                    <div className="md:hidden flex flex-col gap-4 items-center justify-center py-6">
                        <a onClick={() => setOpen(false)} href="#about">About</a>
                        <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
                        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
                        <a href="#education">Education</a>
                        <a
                            href="https://drive.google.com/file/d/1F2ok13tp9GgQ-S6or2PNtWPJB9CFYIfg/view" className="border rounded-lg  p-2 " target="_blank"
                        >
                            Resume
                        </a>
                        <a onClick={() => setOpen(false)} href="#contact" className="border w-fit p-2 rounded-lg">
                            Let's Contact
                        </a>
                    </div>
                )
            }
        </nav >
    )
}
export default Navbar;