import React from "react";
import { useState } from "react";

const contactItems = [
    {
        type: "email",
        label: "faisalsandhu106@gmail.com",
        icon: "/images/icon/mail-icon.svg",
        link: "mailto:faisalsandhu106@gmail.com"
    },
    {
        type: "phone",
        label: "+92 304 65948966",
        icon: "/images/icon/call-icon.svg",
        link: "tel:+9230465948966"
    },
    // {
    //   type: "website",
    //   label: "www.mywebsite.com",
    //   icon: "/images/icon/web-icon.svg",
    //   link: "https://www.mywebsite.com"
    // }
]

const socialLinks = [
    {
        title: "Facebook",
        href: "https://www.facebook.com/faisalsandhu888"
    },
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/faisal-nazir-a6b947351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
]

const contactInfo = [
    {
        type: "email",
        label: "faisalsandhu106@gmail.com",
        link: "mailto:faisalsandhu106@gmail.com"
    },
    {
        type: "phone",
        label: "+92 304 6594966",
        link: "tel:+9230465948966"
    }
]

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        message: "",
    });

    const reset = () => {
        formData.name = "";
        formData.number = "";
        formData.email = "";
        formData.message = "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        fetch("https://formsubmit.co/ajax/bhainirav772@gmail.com", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                name: formData.name,
                number: formData.number,
                email: formData.email,
                message: formData.message,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setSubmitted(data.success);
                reset();
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <section id="contact" className="no-print">
            <div className="xs:pt-20 md:pt-24 lg:pt-28 xl:pt-40 pb-20 font-[font]">
                <div className="flex items-center justify-between md:px-4 xl:px-2 border-b border-black pb-4">
                    <h2 className='xs:text-[1.5em] md:text-[1.7em] xl:text-[2.5em] font-semibold'>Contact Me</h2>
                    <p className="text-xl text-[#F43900] ">( 04 )</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center xs:mt-7 md:mt-8 lg:mt-10 xl:mt-16">
                    <form action="https://formspree.io/f/xpwqvdya" method="POST">
                        <div className="flex flex-col gap-7 sm:gap-12">
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div htmlFor="name" className="div">
                                        Name *
                                    </div>
                                    <input
                                        required
                                        className="py-1 w-full border-0 border-b border-border rounded-none focus-visible:outline-none focus:border-[#FE4300]"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <div htmlFor="number" className="div">
                                        Phone *
                                    </div>
                                    <input
                                        required
                                        className="py-1 w-full border-0 border-b border-border rounded-none focus-visible:outline-none focus:border-[#FE4300]"
                                        id="number"
                                        type="number"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <div htmlFor="email" className="div">
                                    Email *
                                </div>
                                <input
                                    required
                                    className="py-1 w-full border-0 border-b border-border rounded-none focus-visible:outline-none focus:border-[#FE4300]"
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <div htmlFor="message" className="div">
                                    Message *
                                </div>
                                <textarea
                                    required
                                    className="py-1 w-full border-0 border-b border-border rounded-none focus-visible:outline-none focus:border-[#FE4300]"
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={2}
                                />
                            </div>
                            {submitted && (
                                <div className="flex items-center gap-2">
                                    <p className="text-muted-foreground">
                                        Great!!! Email has been Successfully Sent. We will get in
                                        touch asap.
                                    </p>
                                </div>
                            )}
                            <button
                                variant="outline"
                                type="submit"
                                className="w-fit h-full px-5 py-3 rounded-full"
                            >
                                <span className="text-xl font-medium">
                                    Send Now
                                </span>
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-col sm:flex-row md:flex-col justify-between gap-5 md:gap-20 items-center md:items-end">
                        <div className="flex flex-wrap flex-row md:flex-col items-start md:items-end gap-4 md:gap-6">
                            {socialLinks?.map((value, index) => {
                                return (
                                    <div key={index}>
                                        <a
                                            href={value?.href}
                                            target="_blank"
                                            className="navLink text-base sm:text-lg font-normal text-muted-foreground hover:text-primary"
                                        >
                                            {value?.title}
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex flex-wrap justify-center gap-5 lg:gap-11 items-end">
                            {contactInfo?.map((value, index) => {
                                return (
                                    <div key={index}>
                                        <a
                                            href={value?.link}
                                            className="text-base lg:text-lg text-black font-normal border-b border-black pb-3 hover:text-[#FE4300] hover:border-[#FE4300]"
                                        >
                                            {value?.label}
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
