'use client';
import Navbar from "@components/navbar/navbar";
import { useState } from 'react';
import InquiryForm from "@components/inquiry";

const Rust = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full mx-auto">
      <Navbar />
      <div className="max-w-[1224px] w-full mt-10 mx-auto flex justify-between font-sans text-[14px] py-2">
        <div className="px-10">
          <p className="block my-3">Looking for the best Rust Training in Kathmandu, Nepal? or Looking for the best Rust Training in Nepal ? Our computer training institute is highly dedicated and equipped with resources for providing the best Rust Training in Nepal.</p>
          <h2 className="block text-2xl font-bold">Why Rust Programming Course at IT Training Nepal?</h2>
          <p className="block my-3">But, why should anyone consider IT Training Nepal to train themselves on Rust ? Here are the some of the benefits of studying at this institute:</p>
          <ul className="list-disc ml-10  mb-3">
            <li className="list-item">Covers all the basics of Rust Programming. </li>
            <li className="list-item">Preparing students for advanced Rust courses.</li>
            <li className="list-item">Regular practice sessions. </li>
            <li className="list-item">One-on-one interaction with the instructor. </li>
            <li className="list-item">Chances of Internships. </li>
            <li className="list-item">Real-life experience through projects.</li>
          </ul>
          <h2 className="block text-2xl font-bold">Rust Programming Course</h2>
          <p className="block my-3">Rust programming language primarily focuses on safety, productivity, and performance. It is a statically typed language which means that it improves memory safety and error detection, leading to more reliable builds. These aspects made it one of the most desired programming languages amongst developers.</p>
          <p className="block my-3">An employee of Mozilla Graydon Hoare created Rust in 2006 as a personal project. As of today&apos;s date, this programming language works as an alternative to C and C++. Programmers who often seek scalability and concurrency while coding use Rust. </p>
          <p className="block my-3">Rust programming is usually used while creating the game engine. Besides that, it can be used for applications that use virtual reality, web development, and machine learning. Rust serves as a coding language for the data science backend as well. </p>
          <p className="block my-3">Top companies like Facebook, Discord, Microsoft, Dropbox, e.t.c use Rust for various purposes. For example, Facebook has joined the Rust foundation to utilize it in every way possible for development, from source control to compilers.</p>
          <div className="h-[800px]">
            <h2 className="block text-2xl font-bold">Objectives of Rust Programming Course</h2>
            <p>The major objectives of this course are as follows:</p>
            <div className="relative">
              {/* Objectives container */}
              <div className={`overflow-hidden ${isExpanded ? 'max-h-full' : 'max-h-[120px]'}`}>
                <ul className="list-disc ml-10 my-3">
                  <li className="list-item">To provide a basic understanding of the language.</li>
                  <li className="list-item">Prepare students to code in Rust for web development and developing game engines.</li>
                  <li className="list-item">To familiarize students with the syntax of Rust.</li>
                  {isExpanded && (
                    <>
                      <li className="list-item">To prepare individuals for projects and real-life applications using the programming language.</li>
                      <li className="list-item">To teach Rust's concurrency model.</li>
                      <div className="ml-[-40px]">
                        <h2 className="block text-2xl font-bold">How are the Rust Programming Classes Conducted?</h2>
                        <p className="block my-3">The initial phase of the Rust Programming Classes covers the syllabus designed by IT Training Nepal. During this time, the instructor will provide you with a basic understanding of the language and introduce the syntax. </p>
                        <p className="block my-3">By the end of the course, students have to do a project. Students carry it out based on the requirement of a real-time scenario. It is to be noted that the instructor will be available to guide students in their projects.. </p>
                        <p className="block my-3">The classes are normally divided into two parts; the first one is when the basic concepts and theory of the topics are discussed while the second half of the classes focuses on practice sessions and class work. </p>
                        <h2 className="block text-2xl font-bold">Who can join Rust Programming Courses?</h2>
                        <p className="block my-3">There are no certain rules of thumb to determine who can join the Rust programming course and who cannot. Generally, anyone interested in learning Rust can enrol for the training. </p>
                        <p className="block my-3">However, here is the list of people who might find this training program it helpful:</p>
                        <ul className="list-disc ml-10 my-3">
                          <li className="list-item">Individuals who want to build their career on game development can join the training as Rust is one of the most popular coding languages for designing game engines. </li>
                          <li className="list-item">Software engineers with prior knowledge of programming languages can also join the class to upscale their knowledge and build their portfolio. </li>
                          <li className="list-item">IT students and enthusiasts who seek to learn Rust can enrol for the course. </li>
                          <li className="list-item">Data scientists can also learn the programming language as a part of the curriculum or an additional skill set.</li>
                          <li className="list-item">Anyone who wants to work on applications that use virtual reality can also take this training.</li>
                        </ul>
                        <h2 className="block text-2xl font-bold">Prerequisites</h2> 
                        <p className="block my-3">There are no certain prerequisites to learn Rust programming. IT Training Nepal designs its syllabus in such a way that even a complete beginner can start from scratch. </p>
                        <p className="block my-3">However, here is the list of things that can be beneficial in your Rust learning process:</p>
                        <ul className="list-disc ml-10 my-3">
                          <li className="list-item">Understanding of Coding language</li>
                          <li className="list-item">Concepts of C and C++ </li>
                          <li className="list-item">Basic Computer Skills </li>
                        </ul> 
                        <h2 className="block text-2xl font-bold">Duration</h2> 
                        <p className="block my-3">The duration of this course is 2.5 months. During this period students will learn to use Rust to design websites and build software. They will also take their programming knowledge to the next level through real-life projects.</p>
                        <h2 className="block text-2xl font-bold">Scope and Career</h2> 
                        <p className="block my-3">Rust Programming has become popular amongst web developers and software programmers. Along with this, job opportunities are opening up in system-programming and in such areas which concern safety and performance. </p>
                        <p className="block my-3">Having said that, here are some of the job titles that rust programmers can work as: </p>
                        <ul className="list-disc ml-10 my-3">
                          <li className="list-item">Web Developer </li>
                          <li className="list-item">Game Developer </li>
                          <li className="list-item">Rust Developer</li>
                          <li className="list-item">Blockchain developer</li>
                          <li className="list-item">Embedded Systems Engineer</li>
                          <li className="list-item">Rust Backend Developer</li>

                        </ul> 
                      </div>
                    </>

                  )}

                </ul>
              </div>

              {/* Gradient overlay applied to third point */}
              {!isExpanded && (
                <div className="absolute top-[-75px] left-0 right-0 h-[150px] bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
              )}

              {/* Toggle button */}
              <button
                onClick={toggleText}
                className="mt-2 mx-auto flex items-center gap-1 focus:outline-none"
              >
                {isExpanded ? 'View Less' : 'View More'}{" "}
                <span>{isExpanded ? "🡹" : "🡻"}</span>
              </button>
            </div>
          </div>



        </div>
        <div>
          <InquiryForm />
        </div>
      </div>
    </div>
  );
};

export default Rust;
