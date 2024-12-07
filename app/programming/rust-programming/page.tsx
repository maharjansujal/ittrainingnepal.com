'use client';
import Navbar from "@components/navbar/navbar";
import { useState } from 'react';
import InquiryForm from "@components/inquiry";

const rust = () => {
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
        <h2 className="block text-2xl font-bold">Rust Programming Course
        </h2>
        <p className="block my-3">Rust programming language primarily focuses on safety, productivity, and performance. It is a statically typed language which means that it improves memory safety and error detection, leading to more reliable builds. These aspects made it one of the most desired programming languages amongst developers.</p>
        <p className="block my-3">An employee of Mozilla Graydon Hoare created Rust in 2006 as a personal project. As of today's date, this programming language works as an alternative to C and C++. Programmers who often seek scalability and concurrency while coding use Rust. </p>
        <p className="block my-3">Rust programming is usually used while creating the game engine. Besides that, it can be used for applications that use virtual reality, web development, and machine learning. Rust serves as a coding language for the data science backend as well. </p>
        <p className="block my-3">Top companies like Facebook, Discord, Microsoft, Dropbox, e.t.c use Rust for various purposes. For example, Facebook has joined the Rust foundation to utilize it in every way possible for development,  from source control to compilers.</p>
        </div>
        <div>
          <InquiryForm />
        </div>
      </div>
      {/* <p>
          This is the initial text that will always be visible. 
          {isExpanded && (
            <span>
              {" "}
              Here is the additional content that appears when you click "View More".
            </span>
          )}
        </p> */}
      <button onClick={toggleText}>
        {isExpanded ? 'View Less' : 'View More'}
      </button>
    </div>
  );
};

export default rust;
