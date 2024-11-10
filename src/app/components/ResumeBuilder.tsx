// components/ResumeBuilder.tsx
"use client"; // Ensure this is a client component

import React, { useState } from 'react';

const ResumeBuilder: React.FC = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [resumeData, setResumeData] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate resume with editable sections
    const generatedResume = `
      <h2 class="text-xl font-bold">Editable Resume</h2>
      <h3 class="font-semibold mt-4">Personal Information</h3>
      <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
      <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
      <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>

      <h3 class="font-semibold mt-4">Education</h3>
      <p><span contenteditable="true">${education}</span></p>

      <h3 class="font-semibold mt-4">Experience</h3>
      <p><span contenteditable="true">${experience}</span></p>

      <h3 class="font-semibold mt-4">Skills</h3>
      <p><span contenteditable="true">${skills}</span></p>
    `;

    setResumeData(generatedResume);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-center text-3xl font-bold mb-6">Editable Resume Builder</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <fieldset className="border border-blue-300 p-4 rounded-lg">
          <legend className="font-semibold text-lg">Personal Information</legend>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your name"
            required
          />
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
            required
          />
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your contact number"
            required
          />
        </fieldset>

        <fieldset className="border border-blue-300 p-4 rounded-lg">
          <legend className="font-semibold text-lg">Education</legend>
          <textarea
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your education"
            rows={3}
            required
          />
        </fieldset>

        <fieldset className="border border-blue-300 p-4 rounded-lg">
          <legend className="font-semibold text-lg">Experience</legend>
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your work experience"
            rows={3}
            required
          />
        </fieldset>

        <fieldset className="border border-blue-300 p-4 rounded-lg">
          <legend className="font-semibold text-lg">Skills</legend>
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your skills"
            rows={3}
            required
          />
        </fieldset>

        <button type="submit" className="w-full bg-blue-400 text-white p-3 rounded-lg mt-4 hover:bg-blue-500">
          Generate Resume
        </button>
      </form>

      {resumeData && (
        <div
          id="resume-display"
          className="mt-8 p-6 border border-blue-300 rounded-lg bg-blue-50 shadow-sm"
          dangerouslySetInnerHTML={{ __html: resumeData }}
        />
      )}
    </div>
  );
};

export default ResumeBuilder;
