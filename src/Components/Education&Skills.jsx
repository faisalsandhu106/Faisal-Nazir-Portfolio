import { motion } from "motion/react";

const EducationSkills = () => {

  //* Animation for Down to Up
  const DownToUpAnimation = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1
        // Stagger children by 0.1s, starting after a 0.2s delay
        // delayChildren: 0.2,
        // staggerChildren: 0.1,
      },
    },
  };

  const education = [
    {
      title: "Oxford Public High School - 2019",
      description: "Successfully completed 10th Grade (Secondary School Certificate) from Oxford Public High School in 2019,"
    },
    {
      title: "Aspire Group of College - 2022",
      description: "Completed Intermediate in Computer Science with a focus on programming fundamentals, mathematics, and computer systems. Gained basic knowledge of computer applications, problem-solving, and analytical skills while participating in academic and practical computer lab activities."
    },
    {
      title: "Chenab College of Advanced Studies - 2022 - continue",
      description: "Currently pursuing a Bachelor of Science in Computer Science with a focus on programming, software development, database systems, and computer technologies. Developing strong problem-solving and analytical skills through coursework, practical projects, and computer lab work."
    }
  ];

  const skills = [
    {
      name: "HTML 5",
      icon: "/image/html.png",
      rating: 5
    },
    {
      name: "CSS 3",
      icon: "/image/css-3.png",
      rating: 5
    },
    {
      name: "React js",
      icon: "/image/atom.png",
      rating: 4
    },
    {
      name: "Express js",
      icon: "/image/icons8-express-js-80.png",
      rating: 3
    },
    {
      name: "Mongoo DB",
      icon: "/image/icons8-mongodb-96.png",
      rating: 4
    },
    {
      name: "Tailwind CSS",
      icon: "/image/icons8-tailwind-css-240.png",
      rating: 5
    },
    {
      name: "Motion js",
      icon: "/image/motion-js.png",
      rating: 4
    }
  ];

  return (
    <section id="education&skill">
      <div className="overflow-hidden xs:pt-14 md:pt-16 lg:pt-24 xl:pt-40 font-[font]">
        <div className="flex items-center justify-between md:px-4 xl:px-2 border-b border-black pb-4">
          <h2 className='xs:text-[1.5em] md:text-[1.7em] xl:text-[2.5em] font-semibold'>Education & Skills</h2>
          <p className="text-xl text-[#F43900] ">( 02 )</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center xs:mt-7 md:mt-8 lg:mt-10 xl:mt-14 gap-10 xl:gap-20">
          <div className="w-full lg:max-w-md flex flex-col gap-y-6 xl:gap-y-8">
            {education?.map((value, index) => {
              return (
                <div key={index} className="flex items-start xs:gap-x-4 md:gap-x-5">
                  <div className="mt-2.5 p-1 rounded-full border-2 flex items-center justify-center border-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h5 className="xs:text-xl md:text-2xl font-medium">{value?.title}</h5>
                    <p className="font-normal">{value?.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <motion.div
            initial={"hidden"}
            whileInView={"show"}
            variants={DownToUpAnimation}
            viewport={{ once: true }}
            className="grid xs:grid-cols-2 md:grid-cols-3 gap-5 xl:gap-7 w-full">
            {skills?.map((value, index) => {
              return (
                <div
                  key={index}
                  className="box-animate p-4 xl:p-6 border-[2px] border-muted rounded-lg flex flex-col gap-y-5 sm:gap-y-7 items-center justify-between cursor-pointer"
                >
                  <div className="flex flex-col items-center gap-y-4">
                    <figure className="xs:w-14 md:w-16 lg:w-12 xl:w-16 overflow-hidden">
                      <img src={value?.icon} alt="skill-icon" />
                    </figure>
                    <p className="text-black font-normal">{value?.name}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="9"
                          height="9"
                          rx="4.5"
                          fill={i < value?.rating ? "#FE4300" : "#C0D8E0"}
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
