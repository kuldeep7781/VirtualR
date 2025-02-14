import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-10 tracking-wide border-b border-neutral-800">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center my-7 sm:my-8">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => {
          return (
            <div key={index} className=" flex w-full sm:w-1/2 lg:w-[32%] px-3 py-2 items-center">
              <div className="bg-neutral rounded-md p-6 text-[14px] border border-neutral-800 font-thin">
                <p>{testimonial.text}</p>
                <div className="flex mt-4 items-start">
                  <img
                    src={testimonial.image}
                    alt={testimonial.user}
                    className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  />
                  <div>
                    <h6>{testimonial.user}</h6>
                    <span className="text-sm font-normal italic text-neutral-500">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
