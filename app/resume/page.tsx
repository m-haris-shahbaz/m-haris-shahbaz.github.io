
import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-5 my-5 text-white">
      <h1 className="text-4xl font-bold text-center">Muhammad Haris Shahbaz</h1>
      <p className="text-lg text-center mt-2">Web Developer & Designer</p>
      <p className="text-center mt-4">Email: harrihk07@gmail.com | Phone: +971 58 2788325</p>

      <div className="my-5 border-b border-gray-600 pb-4">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="mt-2">
          <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h3>
          <p className="text-gray-400">Murdoch University, Dubai</p>
          <p className="text-gray-400">May 2024 - Jan 2027</p>
        </div>
      </div>

      <div className="my-5 border-b border-gray-600 pb-4">
        <h2 className="text-2xl font-bold">Experience</h2>
{/*         <div className="mt-2">
          <h3 className="text-xl font-semibold">Web Developer</h3>
          <p className="text-gray-400">Company Name, Location</p>
          <p className="text-gray-400">June 2024 - Present</p>
          <ul className="list-disc list-inside mt-2">
            <li>Developed responsive websites using React and Tailwind CSS.</li>
            <li>Collaborated with designers to create user-friendly interfaces.</li>
          </ul>
        </div> */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Intern</h3>
          <p className="text-gray-400">Cashee FZE, Dubai</p>
          <p className="text-gray-400">May 2022 - August 2023</p>
          <ul className="list-disc list-inside mt-2">
            <li>Contributed to community support and developed a bot for the community using JavaScript.</li>
          </ul>
        </div>
      </div>

      <div className="my-5 border-b border-gray-600 pb-4">
        <h2 className="text-2xl font-bold">Skills</h2>
        <ul className="grid grid-cols-2 gap-4 mt-2">
          <li className="border-primary border p-2 rounded">HTML</li>
          <li className="border-primary border p-2 rounded">CSS</li>
          <li className="border-primary border p-2 rounded">JavaScript</li>
          <li className="border-primary border p-2 rounded">React</li>
          <li className="border-primary border p-2 rounded">Next.js</li>
          <li className="border-primary border p-2 rounded">Tailwind CSS</li>
          <li className="border-primary border p-2 rounded">Node.js</li>
          <li className="border-primary border p-2 rounded">Git</li>
        </ul>
      </div>

      <div className="my-5">
        <h2 className="text-2xl font-bold">Projects</h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>PreTechie:</strong> An e-commerce platform for mobile devices. [<a href="https://pretechie.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View Project</a>]
          </li>
          <li>
            <strong>SaeedGH:</strong> A personal portfolio website. [<a href="https://saeedgh.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View Project</a>]
          </li>
          <li>
            <strong>JusoorFM:</strong> An invoicing system. [<a href="https://jusoorfm.aquirty.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View Project</a>]
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
