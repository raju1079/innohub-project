import React, { useState, useCallback } from "react";
import Header from "./Header";
import Footer from "./Footer";

const FaqPages = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const faqPerPage = 5;

  const faqList = [
    {
      question: "What is an internship program?",
      answer: "An internship program is a structured work arrangement offered by organizations to individuals, often students or recent graduates, who seek to gain practical experience or develop skills in a specific field. It serves as a bridge between academic learning and real-world work experience. "
    },
    {
      question: "What are the minimum requirements to join IRC?",
      answer: "The Online Internship program is open for students with at least an 80% and above average in their ongoing degree. Eligibility requires passing an entrance examination and submission of an official college endorsement letter for the eight-month course."
    },
    {
      question: "Are there any opportunities for students to participate in research internships or programs?",
      answer: "We provide a range of research internships and programs tailored to students at different academic levels. These opportunities offer practical research experience and guidance from accomplished experts in various fields. Stay updated by visiting our website or reaching out to us for details on upcoming programs and application processes."
    },
    {
      question: "What is the process of getting an internship? ",
      answer: `There are 5 steps to getting selected for an internship:  
          Screening written test, Training for 2 months, Working on a live project, Campus Interview Training  Mock Written Test & Interview, and Issuance of the Internship Certificate`

    },
    {
      question: "How can I collaborate with researchers at the IRC if I am from another institution or industry?",
      answer: "We actively encourage partnerships with researchers, institutions, and industry collaborators. Feel free to contact us directly to explore potential collaboration opportunities, joint projects, or partnerships. Our commitment lies in promoting interdisciplinary collaboration to address intricate research problems."
    },
    {
      question: "How can I get involved with the IRC?",
      answer: "You have the opportunity to engage with the IRC by showcasing your skills, expertise, and relevant experience. Feel free to propose specific ideas or contribute content such as blog posts, articles, research summaries, or multimedia materials for our website. Remember, your contributions play a vital role in advancing research and fostering innovation. Feel free to reach out to us with your ideas and proposals!"
    },
    {
      question: "Can any individual contribute to the IRC such as blog posts, articles ​research summaries, or multimedia?",
      answer: "Yes, any individual should contact us to be authorized before posting any public articles or blogs."
    },
    {
      question: "What are the research areas covered by the IRC?",
      answer: "IRc covered research areas such as Education, Healthcare, Agriculture, Logistics, Animal Husbandry, Data Science, and Cyber security through various AI Tech"
    },
    {
      question: "Can I access research publications and resources from the IRC?",
      answer: "Once you’ve been granted access, you’ll be able to explore research publications and resources."
    },
    {
      question: "Will I get a certificate at the end of the internship?",
      answer: `Certainly! 

          Upon successful completion of the internship program, you will receive an official certificate.This certificate serves as documentation of your active participation in the program and highlights the skills you’ve gained during your internship. It can enhance your resume and may be recognized by various organizations.`
    },

    {
      question: "What events does InnoHub organize?",
      answer: "The IRC hosts a variety of events, including hackathons, Conferences,Workshops, and Webinars.These gatherings provide opportunities for learning, collaboration, and knowledge exchange."
    },
    {
      question: "What is a Hackathon event?",
      answer: "A hackathon event is an intensive and collaborative gathering where participants, often software developers, designers, and other tech enthusiasts, come together to work on creative projects within a limited timeframe. During a hackathon, teams or individuals brainstorm, code, and build innovative solutions, prototypes,or applications.The goal is to solve specific challenges, learn new skills, and foster a sense of community. These events encourage rapid problem-solving, creativity, and teamwork."
    },

    {
      question: "Who can participate and how many people can be on a team for the HACKATHON event?",
      answer: "In the hackathon, participation is open to individuals interested in coding, regardless of age or experience level. Teams consisting of 4 or 5 members are encouraged."
    },
    {
      question: "If I am interested in being a Speaker for an event, how do I proceed?",
      answer: "You can reach out to us through our website contact form, and our team will promptly get in touch with you."
    },
    {
      question: "Is there an archive of past Innohub event videos available?",
      answer: "The IRC actively participates in various events. Explore our past events and initiatives on our official website, and stay tuned for future events and opportunities to engage with the InnoHub community. "
    },
    {
      question: "How can I stay up to date with events happening in the IRC?",
      answer: "Stay informed about upcoming events by keeping an eye on InnoHub’s event announcements. Our diverse range of events offers valuable opportunities to network, learn, and engage with the InnoHub community. Visit our website regularly to stay up-to-date with our latest events and initiatives"
    },
    {
      question: " Do I get participation certification?",
      answer: "Yes, all the participants will get a participation certificate on successful completion of the event."
    },
    {
      question: "Still have questions?",
      answer: "If you still have any questions, please don't hesitate to contact our HR department details metioned in our website."
    }
  ];

  const indexOfLastQuestion = currentPage * faqPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - faqPerPage;
  const currentQuestions = faqList.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const handleOptionChange = (index) => {
    setSelectedOption(selectedOption === index ? "" : index);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(faqList.length / faqPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };


  return (
    <div className="relative bg-gray xl:w-full lg:w-[1300px] md:w-[1180px] w-[749px] px-[0px] mx-full">

     {/* <div className="relative bg-gray md:w-full w-[739px] p-0 mx-full]"> */}
      <div className=" mx-auto pt-[5px] font-poppins ">
        <Header />
        <div className="bg-gray py-16 mx-10 font-poppins">
          <div className="container mx-auto">
            <div className="px-4 md:px-0">
              <div className="absolute w-full top-[95px] right-[0px] left-[0px] bg-gradient-to-b from-black [background:linear-gradient(180deg,_#09011a,_rgba(105,_63,_196,_0.57)_43%,_rgba(163,_134,_223,_0)_91%)]  h-[466px] overflow-hidden text-4xl md:text-5xl lg:text-6xl">
                <div className="absolute top-[111px] left-[910px] rounded-381xl [background:radial-gradient(50%50%_at_50%_50%,_rgba(120,_100,_161,_0.53)_26.5%,#1c054e_39.88%,_rgba(223,_208,_255,_0))] w-[827px] h-[826px] overflow-hidden hidden" />
                <div className="absolute top-[181px] left-[50%] transform -translate-x-1/2 rounded-full bg-gray-400 w-[686px] h-[686px] overflow-hidden" />
                <img className="absolute top-[0px] left-[50%] transform -translate-x-1/2 w-full md:max-w-[1160px] md:h-[375.6px] md:w-auto h-auto" alt="" src="/artboard-44x-1@2x.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto pt-[200px] md:pt-[250px] font-poppins ">
          <b className=" mb-10 m-5 mt-[50px] ml-[40px] text-29xl  md:text-29xl font-semi-bold text-white flex content-center items-center "> Frequently Asked Questions </b>
          {currentQuestions.map((faq, index) => (
            <div key={index} className="mt-4">
              <p
                className="mt-[40px] ml-[75px] leading-relaxed text-cold-grey-white text-justify-center font-poppins  cursor-pointer hover:underline text-13xl md:text-13xl  lg:text-base"
                onClick={() => handleOptionChange(index)}
                onMouseLeave={() => handleOptionChange("")}
              >
                {faq.question}
              </p>
              {selectedOption === index && (
                <p className="mt-[40px] ml-[75px] leading-relaxed text-cold-grey-white text-justify-center font-poppins hover:underline text-13xl md:text-13xl lg:text-base transform scale-120">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
          <div className="flex justify-center">
            {faqList.length > faqPerPage && (
              <ul className="pagination flex list-none items-center pb-10 ">
                <li className="mr-2">
                  <button onClick={goToPreviousPage} className="px-3 py-1 bg-gray-200 rounded-lg font-poppins cursor-pointer hover:bg-color text-lg min-w-[18px] min-h-[20px] lg:text-base">Previous</button>
                </li>
                {Array.from({ length: Math.ceil(faqList.length / faqPerPage) }).map((_, index) => (
                  <li key={index} className="mx-1">
                    <button
                      onClick={() => paginate(index + 1)}
                      className="px-3 py-1 bg-gray-200 rounded-lg cursor-pointer hover:bg-color border-none  text-lg min-w-[40px] lg:text-base"
                    >

                      {index + 1}
                    </button>
                  </li>
                ))}
                <li className="ml-2">
                  <button onClick={goToNextPage} className="px-3 py-1  bg-gray-200 rounded-lg font-poppins cursor-pointer hover:bg-color text-lg min-w-[40px] lg:text-base">Next</button>
                </li>
              </ul>
            )}
          </div>

        </div>
        <Footer />
      </div>
    </div>
  );
};

export default FaqPages;
