import React, { useState } from 'react';

const Faq = () => {
  const faqData = [
    {
      question: 'Can education flashcards be used for all age groups?',
      answer:
        'Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.',
    },
    {
      question: 'How do education flashcards work?',
      answer:
        'Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.',
    },
    {
      question: 'Can education flashcards be used for test preparation?',
      answer:
        'Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.',
    },
  ];

  const [openIndices, setOpenIndices] = useState([]);

  const toggleQuestion = (index) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className={`relative cursor-pointer w-[848px] px-[24px] flex justify-between  items-center
             border-[#217EEC] rounded-xl bg-white  py-[17px] border-2 transition-all duration-300 ${
              openIndices.includes(index) ? ' bg-white h-auto' : ' h-[58px]'
            }`}
            onClick={() => toggleQuestion(index)}
          >
            <div className='text-[16px] text-[#28262C] font-[600] leading-7'>
              {faq.question}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className={`transform ${openIndices.includes(index) ? 'rotate-180' : ''} transition-transform duration-500`}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.855 7.49599C4.91074 7.44006 4.97698 7.39567 5.04991 7.36539C5.12284 7.33511 5.20103 7.31952 5.28 7.31952C5.35897 7.31952 5.43716 7.33511 5.51009 7.36539C5.58302 7.39567 5.64926 7.44006 5.705 7.49599L12.48 14.272L19.255 7.49599C19.3677 7.38328 19.5206 7.31995 19.68 7.31995C19.8394 7.31995 19.9923 7.38328 20.105 7.49599C20.2177 7.60871 20.281 7.76159 20.281 7.92099C20.281 8.0804 20.2177 8.23328 20.105 8.34599L12.905 15.546C12.8493 15.6019 12.783 15.6463 12.7101 15.6766C12.6372 15.7069 12.559 15.7225 12.48 15.7225C12.401 15.7225 12.3228 15.7069 12.2499 15.6766C12.177 15.6463 12.1107 15.6019 12.055 15.546L4.855 8.34599C4.79906 8.29025 4.75468 8.22401 4.7244 8.15108C4.69412 8.07815 4.67853 7.99996 4.67853 7.92099C4.67853 7.84202 4.69412 7.76383 4.7244 7.6909C4.75468 7.61797 4.79906 7.55173 4.855 7.49599Z"
                fill="#28262C"
              />
            </svg>
          </div>
          {openIndices.includes(index) && (
            <div
              className={`p-4 ${
                openIndices.includes(index) ? 'bg-green-300' : 'hidden'
              } transition-all duration-500`}
            >
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
