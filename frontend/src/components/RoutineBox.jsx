import React, { useEffect } from 'react'
import { useState } from 'react'
import { RxCrossCircled } from "react-icons/rx";

function RoutineBox({subject,time,year}) {
  const [code,setCode]=useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questionSets, setQuestionSets] = useState([]);
  const [selectedSet, setSelectedSet] = useState('');
  const [error, setError] = useState("");
  const openModal = () => {
    setIsModalOpen(true);
    {/*api call to get code*/}
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (isModalOpen) {
      fetchData();
    }
  }, [isModalOpen]);
  const handleSetSelection = (set) => {
    setSelectedSet(set);
    
  };
  console.log("selected set",selectedSet);
  var data=[];
  async function fetchData(){

    try {
      const response = await fetch(`https://erpsystembe.akashroy24.repl.co/questions/${subject}`, {
        method: "GET",});
     
      if (response.ok) {
         data = await response.json();
        console.log("data from response",data);
        setError("");

      } else {
        setError("Data could not be fetched.");
      }
    } catch (error) {
      setError("An error occurred while fetching.");
    }
    setQuestionSets(data.questionSetNames);
  }
  var resp="";
  const generateCode = async() => {
    try {
      const response = await fetch(`https://erpsystembe.akashroy24.repl.co/setQuiz/${subject}/${selectedSet}`, {
        method: "GET",});
      if (response.ok) {
         resp = await response.json();
        console.log("Code from response",resp);
        setError("");
        closeModal();
      } else {
        setError("Code could not be fetched.");
      }
    } catch (error) {
      setError("An error occurred while fetching code.");
    }
    setCode(resp.uuid);
  };

  return (
    <>
    <div className='border-2 border-blue-900 rounded-lg w-[95%] p-4 m-5 h-60 md:w-[55%] md:h-56 lg:w-[40%] lg:h-48 flex flex-col gap-3'>
      <div className='flex flex-row justify-between '>
      <div className='font-semibold text-xl'>{subject}</div>
      <div className='text-gray-700'>{time}</div>
      </div>
      <div className='border w-full border-gray-500 mb-2 '></div>
      <div className=' font-semibold text-lg'>Year : <span>{year}</span></div>
      {
        code?
        (<div className='bg-blue-300 p-2 text-center w-full font-semibold rounded-lg'>code: {code}</div>):
        (<button onClick={openModal} className='bg-blue-300 p-2 text-center rounded-lg w-full font-semibold'> Set Code</button>)
      }
      
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
          {/* Your modal content goes here */}
          <p className='font-bold text-2xl text-gray-600 p-4 border-b-2 border-gray-400'>
          Choose Question Paper from available Sets
        </p>
                  <div>
              {questionSets.map((set) => (
                <div
                  key={set}
                  className={`cursor-pointer p-2 ${
                    selectedSet === set ? 'bg-gray-200' : ''
                  }`}
                  onClick={() => handleSetSelection(set)}
                >
                  {set}
                </div>
              ))}
            </div>
            <div className='mt-4'>
              <input
                type='text'
                placeholder='Enter set name'
                value={selectedSet}
                onChange={(e) => setSelectedSet(e.target.value)}
                className='p-2 border border-gray-300 rounded-md mr-2'
              />
              <button
                onClick={generateCode}
                className='bg-blue-500 text-white p-2 rounded-md'
              >
                Generate Code
              </button>
            </div>
        </div>
      </div>
      
    )}
    </>
  )
}

export default RoutineBox
