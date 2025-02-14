import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-7 border-b border-neutral-800 min-h-[520px]">
      <div className="text-center">
        <span className="bg-neutral text-orange-500 rounded-full h-4 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl mt-5 lg:mt-8 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            Your Code
          </span>
        </h2>
      </div>
      <div className="flex items-center flex-wrap mt-10 lg:mt-15">
        {features.map((feature, index) => {
          return (
            <div key={index} className="px-3 w-[90%] sm:w-1/2 lg:w-1/3">
              <div className="flex">
                <div className="flex mx-4 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                  {feature.icon}
                </div>
                <div className="">
                  <h5 className="mt-1 mb-2 text-[15px]">{feature.text}</h5>
                  <p className="text-md mb-10 text-neutral-500">{feature.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
