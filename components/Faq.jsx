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
    <div className="w-4/5 sm:w-full sm:px-4 sm:pt-8">
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-gray-900  p-4 transform duration-100 easy-in-out">
        <h1 className="text-center text-gray-200 pb-5 text-2xl">
          Frequently Asked Questions
        </h1>
        {faqs.map((faq, idx) => {
          return (
            <div
              tabIndex={0}
              key={idx}
              className="collapse collapse-plus border border-[#1f242d] bg-[#2a303c]"
            >
              <div className="collapse-title text-xl text-gray-200 font-medium">
                {faq.ques}
              </div>
              <div className="collapse-content">
                <hr />
                <p className="pt-2 text-gray-200">{faq.ans}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

