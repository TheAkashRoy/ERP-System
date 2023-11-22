import React from 'react'
import { useState,useEffect } from 'react'
import { RxCrossCircled } from "react-icons/rx";
import Sidebar2 from './Sidebar2';
import Swal from 'sweetalert2'

function GiveExam() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");
const [code,setCode]=useState('');
const[apiResponse,setApiResponse]=useState([]);
const [selectedOptions, setSelectedOptions] = useState({});
const [stuAnswer, setStuAnswer] = useState(''); // String to store student's answers

const handleOptionClick = (questionId, optionId) => {
  const optionLetter = optionId === 0 ? 'a' : 'b';

  setSelectedOptions((prevSelectedOptions) => ({
    ...prevSelectedOptions,
    [questionId]: optionLetter,
  }));

  setStuAnswer((prevStuAnswer) => prevStuAnswer + optionLetter);
};

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  var data=[];
 async  function fetchdata(){
        try{
          const response = await fetch(`https://erpsystembe.akashroy24.repl.co/code/${code}`, {
            method: "GET",});
          
          if (response.ok) {
             data = await response.json();
            console.log("data from response",data);
            setError("");
    
          } else {
            setError("Data from code could not be fetched.");
          }
        }
        catch (error) {
          setError("An error occurred while fetching.");
        }
        setApiResponse(data);
  }
  useEffect(() => {
    if (isModalOpen) {
      fetchdata();
    }
  }, [isModalOpen]);
    function handleClick(){
  console.log("Student Answer",stuAnswer);
  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < stuAnswer.length && i < apiResponse.answer.length; i++) {
      if (stuAnswer[i] === apiResponse.answer[i]) {
        score += 5;
      }
    }
    return score;
  };

  const totalScore = calculateScore();
  Swal.fire({
    title: "Total Score is " + totalScore + " out of 15",
    //text: "That thing is still around?",
    icon: "success",
  });
  closeModal();
  console.log('Total Score:', totalScore);
    }
  return (
    <>
    <div className='flex flex-row '> 
    <Sidebar2/>
<div className='flex flex-col gap-2 items-start justify-start bg-gray-100 p-10 w-full '>
<input type="text"
name="code"
placeholder='Enter Code here'
onChange={(e) => setCode(e.target.value)}
className='border-2 border-blue-900 border-b rounded-lg p-2 w-[45%] font-semibold'
>
</input>
<button onClick={openModal}
className="p-2 text-white bg-blue-700 rounded-xl mt-5 w-[45%] shadow-lg font-semibold mb-5"
>Submit</button>
</div>
</div>
{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <div className="bg-white w-4/5 h-screen rounded-md relative p-8">
      <button
        onClick={closeModal}
        className="absolute top-4 text-3xl font-bold right-2 text-gray-500 hover:text-gray-700 mr-5"
      >
      <RxCrossCircled />
      </button>
      <p className='font-bold text-2xl text-gray-600 p-4 border-b-2 border-gray-400 mb-10'>
      Questions
    </p>
    {apiResponse.questions ? (
  apiResponse.questions.map((question) => (
    <div key={question._id} className="mb-4 lex flex-col justify-start items-start">
      <p className="font-semibold text-xl ml-4">{question.question}</p>
      {question.options.map((option, index) => (
        <div
          key={index}
          onClick={() => handleOptionClick(question._id, index)}
          className={`cursor-pointer border p-4 m-2 font-semibold rounded-xl ${
            selectedOptions[question._id] === index
              ? 'bg-blue-100 border-2 border-blue-800 text-blue-800'
              : 'bg-gray-100 border-2 border-gray-400 text-gray-800'
          }`}
        >
          {`${String.fromCharCode(97 + index)}. ${option}`}
        </div>
      ))}
    </div>
  ))
) : (
  <p>Loading...</p>
)}

    <div className="flex justify-center items-center">
    <button
      type="submit"
      className="p-2 text-white bg-blue-700 rounded-xl mt-5 w-[30%] shadow-lg font-semibold mb-5"
    onClick={handleClick}>
      Submit
    </button>
  </div>
  
    </div>
  </div>
  
)}
</>
  )
}

export default GiveExam
