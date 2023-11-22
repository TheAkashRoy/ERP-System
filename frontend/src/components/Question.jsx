import React, { useState } from 'react';
import Sidebar from './Sidebar';
const QuestionForm = () => {
  const [formData, setFormData] = useState({
    subject: '',
    setName: '',
    questions: [
      { question: '', options: Array(2).fill('') },
      { question: '', options: Array(2).fill('') },
      { question: '', options: Array(2).fill('') },
     
    ],
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuestionChange = (e, questionIndex) => {
    const { name, value } = e.target;
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex][name] = value;
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const value = e.target.value;
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // You can handle the submission of the form data here, e.g., send it to a server.
    console.log('Form data:', formData);
    try {
      const response = await fetch("https://erpsystembe.akashroy24.repl.co/insertQS", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("data from response",data);
        setError("");
        window.location.reload();
      } else {
        setError("Data could not be submitted.");
      }
    } catch (error) {
      setError("An error occurred while logging in.");
    }
  };

  return (
    <div className='flex flex-row '> 
          <Sidebar/>
    <div className='flex flex-col gap-2 items-start justify-start bg-blue-400 p-10 w-full '>
      <form
        onSubmit={handleSubmit}
        className='shadow-lg rounded-xl bg-gray-100 w-[92%] p-10 font-semibold'
      >
        <h1 className='font-bold text-center text-2xl mb-3'>Set Questions</h1>
        <div className='flex flex-col gap-3'>
          <label>Enter Subject Name:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder='Enter Subject Name'
            className='border-2 border-blue-900 rounded-lg p-2 w-[90%]'
          />
        </div>
        <div className='flex flex-col gap-3 mt-3'>
          <label>Enter Set Name:</label>
          <input
            type="text"
            name="setName"
            value={formData.setName}
            onChange={handleChange}
            placeholder='Enter Set Number'
            className='border-2 border-blue-900 border-b rounded-lg p-2 w-[90%] mb-5'
          />
        </div>
        <div className='flex flex-col gap-3'>
          {formData.questions.map((question, questionIndex) => (
            <div key={questionIndex} className='flex flex-col gap-3'>
              <label>Question {questionIndex + 1}:</label>
              <input
                type="text"
                name="question"
                value={question.question}
                className='border-2 border-blue-900 border-b rounded-lg p-2 w-[90%]'
                placeholder='Enter Question'
                onChange={(e) => handleQuestionChange(e, questionIndex)}
              />
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <label></label>
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(e, questionIndex, optionIndex)}
                    placeholder={`Enter Option ${optionIndex + 1}`}
                    className='border-2 border-blue-900 border-b rounded-lg p-2 w-[90%]'
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="p-2 text-white bg-blue-700 rounded-xl mt-5 w-[80%] shadow-lg font-semibold mb-5"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default QuestionForm;
