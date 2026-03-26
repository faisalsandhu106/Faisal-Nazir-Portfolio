import React from 'react'

const About = () => {
    return (
        <section id="about">
            <div className="relative xs:pt-12 md:pt-10 xl:pt-20 font-[font]">
                <div className="absolute top-0 left-0 z-[1] flex justify-center xs:pt-[110px] md:pt-[80px] lg:pt-[60px] xl:pt-[40px] 2xl:pt-[30px] w-full">
                    <h1 className="text-[90px] sm:text-[120px] md:text-[190px] lg:text-[250px] xl:text-[340px] 2xl:text-[370px] text-nowrap text-gray-100">
                        PortFolio
                    </h1>
                </div>

                <div className="relative z-[2]">
                    <div className="flex items-center justify-between md:px-4 xl:px-2 border-b border-black pb-4">
                        <h2 className='xs:text-[1.5em] md:text-[1.7em] xl:text-[2.5em] font-semibold'>About Me</h2>
                        <p className="text-xl text-[#F43900] ">( 01 )</p>
                    </div>

                    <div className="pt-10 xl:pt-16 flex gap-x-14 items-center justify-between">
                        <div className="lg:w-[230px] xl:w-[300px] h-auto hidden lg:flex">
                            <img src="/icon/about-banner-img.svg" alt="about-banner" />
                        </div>

                        <div className="w-full lg:max-w-2xl flex-1">
                            <p>
                                I'm a passionate Frontend Developer specializing in building responsive and dynamic web applications using React.js, With a strong foundation in HTML, and CSS, I create intuitive user interfaces that deliver seamless user experiences. I enjoy turning complex problems into elegant, scalable solutions while staying up to date with the latest in web technologies. Whether it's optimizing performance, implementing pixel-perfect designs, or integrating APIs, I bring a detail-oriented mindset and a collaborative spirit to every project. My goal is to build fast, accessible, and maintainable frontends that not only work flawlessly but also feel great to use. I regularly work with animation libraries like Framer Motion and GSAP to enhance UI interactions — from subtle transitions to complex motion effects. These tools allow me to add personality and fluidity to my projects while keeping performance in check. For data handling, I rely on Axios to efficiently fetch and manage API data. Its simplicity and flexibility help me keep code clean and scalable, whether I'm working with RESTful APIs or more complex backend integrations.
                            </p>

                            <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-gray-300">
                                {[
                                    { count: "1+", label: "Years of experience" },
                                    { count: "95+", label: "Happy Clients" },
                                    { count: "20+", label: "Project Completed" },
                                ].map((item, i) => (
                                    <div key={i}>
                                        <h3 className='xs:text-3xl md:text-4xl xl:text-5xl font-medium'>{item.count}</h3>
                                        <p className="text-base md:text-lg text-black">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About