export default function Schedule() {
  return (
    <div className="h-full min-h-screen pt-[80px] w-full bg-faq">
      <div className="flex flex-col items-center justify-center h-full pb-10">
        <div className="w-4/5 sm:w-full sm:px-4 sm:pt-8">
          <div className="mx-auto w-full max-w-2xl rounded-2xl bg-gray-900  p-4 transform duration-100 easy-in-out">
            <h1 className="text-center text-gray-200 pb-5 text-2xl">
              Schedule For Day 1
              <br />
              4th Nov
            </h1>
            <a href="#">
              <div className="btn btn-success w-full">Download PDF</div>
            </a>
            <h1 className="text-center text-gray-200 pb-5 mt-5 text-2xl">
              Schedule For Day 2
              <br />
              5th Nov
            </h1>
            <a href="#">
              <div className="btn btn-success w-full">Download PDF</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
