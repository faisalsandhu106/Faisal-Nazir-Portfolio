import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "motion/react";
import { FiMenu } from "react-icons/fi";
import Footer from "./Footer";

const Header = () => {
    const [isNavbar, setIsNavbar] = useState(false);

    const navbartoggle = () => {
        setIsNavbar(!isNavbar)
    };

    return (
        <header className="px-4 md:px-6 lg:px-10 xl:px-14 py-2 fixed top-0 left-0 z-[10] w-full bg-[#FFFFFF] shadow-sm font-[font]">
            <div className="flex items-center justify-between">
                {/* <Logo /> */}
                <figure className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden">
                    <img src="/icon/logo.png" alt="logo" />
                </figure>

                {/* DeskTop Nav Links */}
                <ul className="hidden md:flex items-center justify-center md:gap-x-6 lg:gap-x-8 w-fit md:text-sm lg:text-base">
                    <li>
                        <a className="navLink" href="#home">Home</a>
                    </li>
                    <li>
                        <a className="navLink" href="#about">About</a>
                    </li>
                    <li>
                        <a className="navLink" href="#education&skill">Education & Skills</a>
                    </li>
                    <li>
                        <a className="navLink" href="#project">Project</a>
                    </li>
                    <li>
                        <a className="navLink" href="#contact">Contact</a>
                    </li>
                </ul>

                {/* Open & Close Button */}
                <div onClick={navbartoggle} className='md:hidden relative p-1 text-3xl font-bold rounded-sm hover:scale-[1.02] cursor-pointer duration-150'>
                    {
                        isNavbar ?
                            <AiOutlineClose />
                            :
                            <FiMenu />
                    }
                </div>

                {/* Responsive Navbar */}
                {
                    isNavbar && (
                        <motion.div
                            initial={{ opacity: 1, x: -500 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.35, delay: 0.05 }}
                            className="absolute top-16 left-0 z-10 flex flex-col justify-between px-4 pb-28 w-full h-screen bg-[#FFFF] overflow-hidden">
                            <ul className="flex flex-col gap-y-5 mt-10 w-full text-[1.4em] font-medium">
                                <motion.li
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.28, delay: 0.5 }}>
                                    <a onClick={navbartoggle} className="navLink inline-flex w-full border-b-2 border-gray-100" href="#home">Home</a>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.28, delay: 0.6 }}>
                                    <a onClick={navbartoggle} className="navLink inline-flex w-full border-b-2 border-gray-100" href="#about">About</a>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.28, delay: 0.7 }}>
                                    <a onClick={navbartoggle} className="navLink inline-flex w-full border-b-2 border-gray-100" href="#education&skill">Education & Skills</a>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.28, delay: 0.8 }}>
                                    <a onClick={navbartoggle} className="navLink inline-flex w-full border-b-2 border-gray-100" href="#project">Project</a>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.28, delay: 0.9 }}>
                                    <a onClick={navbartoggle} className="navLink inline-flex w-full border-b-2 border-gray-100" href="#contact">Contact</a>
                                </motion.li>
                            </ul>

                            <Footer />
                        </motion.div>
                    )
                }
            </div>
        </header>
    );
};

export default Header;
