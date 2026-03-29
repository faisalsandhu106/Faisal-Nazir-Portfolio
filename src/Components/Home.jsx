import React from 'react'

const Home = () => {

    const contactItems = [
        {
            type: "email",
            label: "faisalsandhu106@gmail.com",
            icon: "/icon/mail-icon.svg",
            link: "mailto:faisalsandhu106@gmail.com"
        },
        {
            type: "phone",
            label: "+92 304 65948966",
            icon: "/icon/call-icon.svg",
            link: "tel:+9230465948966"
        },
        // {
        //   type: "website",
        //   label: "www.mywebsite.com",
        //   icon: "/icon/web-icon.svg",
        //   link: "https://www.mywebsite.com"
        // }
    ];

    const socialItems = [
        // {
        //   platform: "dribbble",
        //   icon: "/icon/dribble-icon.svg",
        //   link: "https://dribbble.com"
        // },
        {
            platform: "linkedin",
            icon: "/icon/linkedin-icon.svg",
            link: "https://www.linkedin.com/in/faisal-nazir-a6b947351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            platform: "facebook",
            icon: "/icon/facebook-icon.svg",
            link: "https://www.facebook.com/faisalsandhu888"
        }
    ];

    return (
        <section id="home" className="pt-24 md:pt-32 lg:pt-36 xl:pt-32 2xl:pt-36 pb-3 md:pb-16 lg:pb-30 font-[font]" >
            <div className="md:flex items-center justify-center space-y-8 md:space-y-0 md:gap-x-8 lg:gap-x-12 xl:gap-x-14">
                <div className="flex flex-col xs:gap-y-3 md:gap-y-3 lg:gap-y-4 xl:gap-y-4">
                    <div className='xs:leading-[50px] lg:leading-[60px] xl:leading-[75px]'>
                        <div className="flex items-center gap-x-5">
                            <h1 className="text-[2.2em] md:text-[2.2em] lg:text-[2.8em] xl:text-[4em] font-medium">I`m Faisal</h1>
                            <div className="wave xs:w-10 lg:w-12">
                                <img src="/icon/wave-icon.svg" alt="wave-icon" />
                            </div>
                        </div>
                        <h1 className="text-[2.2em] md:text-[2.2em] lg:text-[2.8em] xl:text-[4em] font-medium">Frontend Deveploer</h1>
                    </div>
                    <p className="text-muted-foreground font-normal max-w-md xl:max-w-xl">
                        Highly motivated React Frontend Developer with 1+ year of experience in building scalable and efficient web applications. Proficient in React js, and HTML, CSS, with a strong passion for delivering high-quality solutions.
                    </p>
                    <div className="flex items-center mt-6">
                       {/* <a>
                            <button className='px-7 py-4 rounded-full text-xl overflow-hidden'>
                                Download Resume
                            </button>
                        </a> */}
                    </div>
                </div>
                <figure className="flex items-center justify-center w-fit md:w-[400px] xl:w-[500px] rounded-md overflow-hidden">
                    <img src="/image/faisal-img1.jpeg" alt="faisal-img" />
                </figure>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between xs:px-5 md:px-0 gap-4 pt-7 md:pt-16 lg:pt-20">
                {/* Contact Items */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 md:gap-5 lg:gap-11">
                    {contactItems?.map(
                        (value, index) => (
                            <a
                                key={index}
                                target='_blank'
                                href={value?.link}
                                className=" flex items-center gap-2 lg:gap-4 text-sm md:text-base hover:text-[#FE4300] duration-100"
                            >
                                <img src={value.icon} alt="social-icon" />

                                <h6 className="text-base md:text-base xl:text-xl hover:text-primary">
                                    {value?.label}
                                </h6>
                            </a>
                        ),
                    )}
                </div>

                {/* Social Items */}
                <div className="flex items-center justify-center md:justify-end xs:gap-x-5 md:gap-x-5">
                    {socialItems?.map((value, index) => (
                        <a key={index} target='_blank' href={value?.link} className='scale-125'>
                            <img src={value.icon} alt="social-icon" />
                        </a>
                    ))}
                </div>
            </div>

        </section >
    )
}

export default Home