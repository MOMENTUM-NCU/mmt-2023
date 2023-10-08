export default function About() {
  return (
    <section className="bg-[#532273] body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/6 mx-auto flex items-center flex-wrap sm:flex-nowrap gap-5">
          <div className="rounded-lg overflow-hidden">
            <video autoPlay muted loop className="drop-shadow-xl rounded-2xl">
              <source src="/momentum21.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <h1 className="w-fit mb-10 mx-auto text-5xl font-bold text-white">
              Momentum
            </h1>
            <p className="leading-relaxed text-lg mb-4 text-gray-200 text-center sm:text-left">
              Momentum is a 2-day long festival organized in the month of
              November. Momentum is the university fest where we provide the
              student community from various Universities and Colleges with
              velocity. This year Momentum 2023, the 25th Edition is planned for
              4th-5th November.
            </p>
          </div>
        </div>
        <div className="container px-5 mt-20 mx-auto">
          <div className="lg:w-4/6 w-full mx-auto text-center">
            <h1 className="w-fit mb-10 mx-auto sm:ml-0 text-5xl font-bold text-white">
              The NorthCap University
            </h1>
            <p className="leading-relaxed text-lg text-gray-200 text-center sm:text-left">
              Ever since its inception in 1996, The NorthCap University has come
              a long way in terms of technical excellence. With our topmost
              priority being academics, the students have also proven their
              mettle in all fields, from declamations and choreography to
              fashion shows.
              <br />
              NCU has achieved the highest rating of 5 stars on the QS rating
              system in Teaching, Employability, Online Learning, Academic
              Development, and Inclusiveness, making NCU among the top
              universities in India.
              <br />
              NCU has been accredited with NAAC &rsquo;A&rsquo; grade and is
              ranked among the top Indian universities in the NIRF-2022 round of
              assessment. NCU has been selected by ASU as its first
              comprehensive university partner in India to be endorsed as
              &quot;Powered by ASU&quot;.
              <br />
              The University&rsquo;s alliance with Arizona State University
              represents a far-reaching collaboration focused on student success
              through innovation, access to global knowledge, and future
              pathways to higher studies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
