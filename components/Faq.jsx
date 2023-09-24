const faqs = [
  {
    ques: "How do I confirm my participation in the fest ?",
    ans: "You'll receive an email confirming your participation.",
  },
  {
    ques: "How is Momentum being conducted this year ?",
    ans: "Momentum is being conducted in offline mode this year",
  },
  {
    ques: "Is the entry free for all? Who can attend ?",
    ans: 'You need to register for at least 1 event to be eligible for entry.',
  },
  {
    ques: "Who can attend Momentum ?",
    ans: "Momentum is open to all students of all colleges. You can attend Momentum even if you are not a part of any college fest committee.",
  },
  {
    ques: "Will there be food stalls in the fest ?",
    ans: "Yes, there will be a lot of food stalls in the fest.",
  },
];

export default function FAQ() {
  return (
    <div className="m-0 sm:w-full sm:px-4 sm:pt-8 mt-10">
      <div className="w-full p-4 transform duration-100 easy-in-out">
        <h1 className="text-left text-gray-200 pb-5 text-7xl font-bold ">
          FAQs
        </h1>
        <div className="h-fit bg-black  flex-col justify-center items-center ">
        <div className="h-screen w-fit  flex flex-col justify-evenly items-center mx-auto container">
        {faqs.map((faq, idx) => {
          return (
            <>
              <div tabIndex={0} key={idx} className="-mt-16 w-full max-w-4xl collapse border-[3px] rounded-[32px] border-[#ffffff] " >
               <div className="collapse-title text-gray-200 text-4xl font-semibold ">
                 {faq.ques}
               </div>
               <div className="collapse-content">
                 <hr />
                 <p className="pt-2 text-gray-200 text-4xl font-semibold">
                  {faq.ans}
                  </p>
               </div>
             </div>
            </>
          );
        })}
        </div>
      </div>
      </div>
    </div>
  );
}
{/* <div className="bg-yellow-900 flex justify-center w-96 border">
                {faq.ques}
              </div>
              <div className="collapse-content">
              <hr />
                <p className="pt-2 text-gray-200">{faq.ans}</p>
              </div> */}

