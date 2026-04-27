import React from "react";
import { NavLink } from "react-router-dom";

const Project = () => {

    //* Project List
    const workData = [
        {
            image: "/image/K72-Agency-img.png",
            title: "K72 Agency Website Design",
            client: "John Honnai",
            slug: "https://k72-agency-site.vercel.app/"
        },
        {
            image: "/image/{5065546E-06B5-46D0-9C98-5DE9853DE885}.png",
            title: "Too Good Co. Website Design",
            client: "Michael Carter",
            slug: "https://two-good-coo.vercel.app/"
        },
        {
            image: "/image/chenab-college.png",
            title: "Chenab College Website Design",
            client: "Michael Carter",
            slug: "https://chenab-college.vercel.app/home"
        },
        {
            image: "/image/{A73C625A-702E-4655-A45A-29AFC465AFEE}.png",
            title: "This-Is-Digaital Website Design",
            client: "Daniel Rodriguez",
            slug: "https://this-is-digaital-fs.netlify.app/"
        },
        {
            image: "/image/apna-store-fs.png",
            title: "Apna Store E commerce",
            client: "Sophia Bennett",
            slug: "https://apna-store-commerce.vercel.app/"
        }
    ];

    return (
        <section id="project">
            <div className="xs:pt-20 md:pt-24 lg:pt-28 xl:pt-36 font-[font]">
                <div className="flex items-center justify-between md:px-4 xl:px-2 border-b border-black pb-4">
                    <h2 className='xs:text-[1.5em] md:text-[1.7em] xl:text-[2.5em] font-semibold'>Latest Works</h2>
                    <p className="text-xl text-[#F43900] ">( 03 )</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 xl:gap-x-12 gap-y-12 lg:gap-y-12 xl:gap-y-20 xs:mt-7 md:mt-8 lg:mt-10 xl:mt-14">
                    {workData?.map((value, index) => {
                        return (
                            <div
                                key={index}
                                className="group flex flex-col gap-3 xl:gap-6 overflow-hidden"
                            >
                                <div className="relative">
                                    <figure>
                                        <img src={value.image} alt="project-img" />
                                    </figure>
                                    <a
                                        href={value.slug}
                                        target="_blank"
                                        className="absolute top-0 left-0 backdrop-blur-xs w-full h-full hidden group-hover:flex bg-[#fe4400a4]"
                                    >
                                        <span className="flex justify-center items-center p-5 w-full">
                                            <svg
                                                width="65"
                                                height="64"
                                                viewBox="0 0 65 64"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    x="0.333374"
                                                    width="64"
                                                    height="64"
                                                    rx="32"
                                                    fill="#FE4300"
                                                />
                                                <path
                                                    d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                                                    stroke="#FFFF"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                                <div className="flex flex-col gap-0 xl:gap-2">
                                    <div className="flex items-center justify-between text-xl">
                                        <a target="_blank" href={`${value.slug}`}>
                                            <h5>{value?.title}</h5>
                                        </a>
                                    </div>
                                    <p>Client: {value?.client}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Project;
