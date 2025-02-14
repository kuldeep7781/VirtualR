import { CheckCircle2 } from "lucide-react";
import codeimg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const WorkFlow = () => {
  return (
    <div className="mt-10 border-b border-neutral-800">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center mt-6 tracking-wide">
        Accelerate Your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-[80%] sm:w-[50%] lg:w-1/3 mt-5 lg:mt-8">
            <img src={codeimg} alt="code" />
        </div>
        <div className="pt-6 w-full lg:w-1/2">
            {checklistItems.map((item,index) => {
                return (
                    <div key={index} className="flex mb-6">
                        <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-8 p-2 justify-center items-center rounded-full">
                            <CheckCircle2 />
                        </div>
                        <div>
                          <h5 className="mt-1 mb-2 text-[15px]">{item.title}</h5>
                          <p className="text-md text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
