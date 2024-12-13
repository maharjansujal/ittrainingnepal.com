'use client';
import Navbar from "@components/navbar/navbar";
import { useState } from 'react';
import InquiryForm from "@components/inquiry";
import ParentDropdown from "@components/dropdown/dropdownParent";
const Rust = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  const dropdowns = [
    {
      name: 'Introduction',
      content: (
        <ul className="custom-list list-none pl-0">
          <li className='mb-2'>Getting Started</li>
          <li className='mb-2'>Installation</li>
          <li className='mb-2'>Hello, World!</li>
          <li className='mb-2'>Hello, Cargo!</li>
        </ul>
      ),
    },
    {
      name: 'Common Programming Concepts',
      content: (
        <div>
          <ul className="custom-list list-none pl-0">
            <li className='mb-2'>Variables</li>
            <li className='mb-2'>Mutability</li>
            <li className='mb-2'>Datatypes</li>
            <li className='mb-2'>Functions</li>
            <li className='mb-2'>Comments</li>
            <li className='mb-2'>Control Flow</li>
          </ul>
        </div>
      ),
    },
    {
      name: 'Understanding Ownership',
      content: (
        <div>
          <ul className="custom-list list-none pl-0">
            <li className='mb-2'>What is Ownership?</li>
            <li className='mb-2'>References and Borrowing</li>
            <li className='mb-2'>The Slice Type</li>
          </ul>
        </div>
      ),
    },
    {
      name: 'Using Structs to Structure Related Data',
      content: (
        <div>
          <ul className="custom-list list-none pl-0">
            <li className='mb-2'>Defining and Initiating Structs</li>
            <li className='mb-2'>. An Example Program Using Structs</li>
            <li className='mb-2'>Method Syntax</li>
          </ul>
        </div>
      ),
    },
    {
      name: 'Enums and Pattern Matching',
      content: (
        <div>
          <ul className="custom-list list-none pl-0">
            <li className='mb-2'>Defining an Enum</li>
            <li className='mb-2'>The match Control Flow Construct</li>
            <li className='mb-2'>Concise Control Flow with if let</li>
          </ul>
        </div>
      ),
    },
    {
      name: 'Managing Growing Projects with Packages, Crates and Modules',
      content: (
        <div>
          <ul className="custom-list list-none pl-0">
            <li className='mb-2'>Packages and Crates</li>
            <li className='mb-2'>Defining Modules to Control Scope and Privacy</li>
            <li className='mb-2'>Paths for Referring to an Item in the Module Tree</li>
            <li className='mb-2'>Bringing Paths Into Scope with the use keyword</li>
            <li className='mb-2'>Separating Modules into Different Files</li>
          </ul>
        </div>
      ),
    },
    {
      name: 'Common Collections',
      content: (
        <div>
          <ul className="custom-list list-none pl-0">
            <li className='mb-2'>Storing Lists of Values with Vectors</li>
            <li className='mb-2'>Storing UTF-8 Encoded Text with Strings</li>
            <li className='mb-2'>Storing Keys with Associated Values in Hash Maps</li>
          </ul>
        </div>
      ),
    },
    {
      name: 'Error Handling',
      content: (
        <div>
          <ul className="custom-list list-none pl-0">
            <li className='mb-2'>Unrecoverable Errors with panic!</li>
            <li className='mb-2'>SRecoverable Errors with Result</li>
            <li className='mb-2'>To panic! or Not to panic!</li>
          </ul>
        </div>
      ),
    },
    {
      name: 'Generic Data Types',
      content: (
        <div>
          <ul className="custom-list list-none pl-0">
            <li className='mb-2'>Traits: Defining Shared Behavior</li>
            <li className='mb-2'>Validating References with Lifetimes</li>
          </ul>
        </div>
      ),
    },
    {
      name: 'Writing Automated Tests',
      content: (
        <div>
          <ul className="custom-list list-none pl-0">
            <li className='mb-2'>How to Write Tests</li>
            <li className='mb-2'>Controlling How Tests Are Run</li>
            <li className='mb-2'>Test Organization</li>
          </ul>
        </div>
      ),
    },
    {
      name: 'An I/O Project: Building a Command Line Program',
      content: (
        <div>
          <ul className="custom-list list-none pl-0">
            <li className='mb-2'>Accepting Command Line Arguments</li>
            <li className='mb-2'>Reading a File</li>
            <li className='mb-2'>Refactoring to Improve Modularity and Error Handling</li>
            <li className='mb-2'>Developing the Library's Functionality with Test Driven Development          </li>
            <li className='mb-2'>Working with Environment Variables</li>
            <li className='mb-2'>Writing Error Messages to Standard Error Instead of Standard Output</li>
          </ul>
        </div>
      ),
    }, 
    {
      name: 'Functional Language Features: Iterators and Closures',
      content: (
        <div>
          <ul className="custom-list list-none pl-0">
            <li className='mb-2'>Closures: Anonymous Functions that Capture Their Environment</li>
            <li className='mb-2'>Processing a Series of Items with Iterators</li>
            <li className='mb-2'>Improving Our I/O Project</li>
            <li className='mb-2'>Comparing Performance: Loops vs. Iterators</li>
          </ul>
        </div>
      ),
    },
    {
      name: 'More about Cargo and Crates.io',
      content: (
        <div>
          <ul className="custom-list list-none pl-0">
            <li className='mb-2'>Customizing Builds with Release Profiles</li>
            <li className='mb-2'>Publishing a Crate to Crates.io</li>
            <li className='mb-2'>Cargo Workspaces</li>
            <li className='mb-2'>Installing Binaries from Crates.io with cargo install</li>
            <li className='mb-2'>Extending Cargo with Custom Commands</li>
          </ul>
        </div>
      ),
    },
    {
      name: 'Smart Pointers',
      content: (
        <div>
          <ul className="custom-list list-none pl-0">
            <li className='mb-2'>Using Box to Point to Data on the Heap</li>
            <li className='mb-2'>Treating Smart Pointers Like Regular References with the Deref Trait</li>
            <li className='mb-2'>Running Code on Cleanup with the Drop Trait</li>
            <li className='mb-2'>Rc, the Reference Counted Smart Pointer</li>
            <li className='mb-2'>RefCell and the Interior Mutability Pattern</li>
            <li className='mb-2'>Reference Cycles Can Leak Memory</li>
          </ul>
        </div>
      ),
    },
    {
      name: 'Fearless Concurrency',
      content: (
        <div>
          <ul className="custom-list list-none pl-0">
            <li className='mb-2'>Using Threads to Run Code Simultaneously</li>
            <li className='mb-2'>Using Message Passing to Transfer Data Between Threads</li>
            <li className='mb-2'>Shared-State Concurrency</li>
            <li className='mb-2'>Extensible Concurrency with the Sync and Send Traits</li>
          </ul>
        </div>
      ),
    },
    {
      name: 'Object Oriented Programming Features of Rust',
      content: (
        <div>
          <ul className="custom-list list-none pl-0">
            <li className='mb-2'>Characteristics of Object-Oriented Languages</li>
            <li className='mb-2'>Using Trait Objects That Allow for Values of Different Types</li>
            <li className='mb-2'>Implementing an Object-Oriented Design Pattern</li>
          </ul>
        </div>
      ),
    },
    {
      name: 'Patterns and Matching',
      content: (
        <div>
          <ul className="custom-list list-none pl-0">
            <li className='mb-2'>All the Places Patterns Can Be Used</li>
            <li className='mb-2'>Refutability: Whether a Pattern Might Fail to Match</li>
            <li className='mb-2'>Pattern Syntax</li>
          </ul>
        </div>
      ),
    },
    {
      name: 'Advanced Features',
      content: (
        <div>
          <ul className="custom-list list-none pl-0">
            <li className='mb-2'>Unsafe Rust</li>
            <li className='mb-2'>Advanced Traits</li>
            <li className='mb-2'>Advanced Types</li>
            <li className='mb-2'>Advanced Functions and Closures</li>
            <li className='mb-2'>Macros</li>
          </ul>
        </div>
      ),
    },
    {
      name: 'Final Project: Building a Multithreaded Web Server',
      content: (
        <div>
          <ul className="custom-list list-none pl-0">
            <li className='mb-2'>Building a Single-Threaded Web Server</li>
            <li className='mb-2'>Turning Our Single-Threaded Server into a Multithreaded Server</li>
            <li className='mb-2'>Graceful Shutdown and Cleanup</li>
          </ul>
        </div>
      ),
    }
  ];
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
          <div>
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
          <ParentDropdown dropdowns={dropdowns} />;
        </div>
        <div>
          <InquiryForm />
        </div>
      </div>

    </div>
  );
};

export default Rust;
