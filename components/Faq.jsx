const faqs = [
  {
    ques: " How do I confirm my participation in the fest?",
    ans: "To confirm your participation, you will receive a confirmation email.",
  },
  {
    ques: "How is Momentum being conducted this year ?",
    ans: "Momentum will be conducted at the NCU Campus, with a few events happening online.",
  },
  {
    ques: "Is the entry free for all? Who can attend ?",
    ans: 'To secure your entry to Momentum, you must register for at least one event',
  },
  {
    ques: "Who can attend Momentum ?",
    ans: " Momentum is open to all students from any college. You can attend Momentum even if you are not part of any college fest committee. However carrying your College ID card is essentialalong with your event registration ticket.",
  },
  {
    ques: "Will there be food stalls in the fest ?",
    ans: "Yes, there will be a variety of food stalls available at the fest.",
  },
  {
    ques: " Is it possible to get a refund of the registration fee if we are unable to attend the event?",
    ans: "Unfortunately, the registration fee is non-refundable under any circumstances.",
  },
];

export default function FAQ() {
  return (
    <div className="m-0 sm:w-full sm:px-4 sm:pt-8 mt-10" id="faqNCU">
      <div className="w-full p-4 transform duration-100 easy-in-out">
        <h1 className="text-left text-gray-200 pb-5 lg:text-7xl md:text-6xl text-4xl font-bold" data-aos="fade-right">
          FAQs
        </h1>
        <div className="h-fit bg-black  flex-col justify-center items-center ">
        <div className="h-screen w-fit  flex flex-col justify-evenly items-center mx-auto container">
        {faqs.map((faq, idx) => {
          return (
            <>
              <div tabIndex={0} key={idx} className="mt-2 w-full max-w-4xl collapse border-[3px] rounded-[32px] border-[#ffffff]" data-aos="fade-down">
               <div className="collapse-title text-gray-200 lg:text-4xl md:text-3xl text-2xl font-semibold ">
                 {faq.ques}
               </div>
               <div className="collapse-content">
                 <hr />
                 <p className="pt-2 text-gray-200 lg:text-4xl md:text-3xl font-extralight">
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

