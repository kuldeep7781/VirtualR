import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"


const Pricing = () => {
  return (
    <div className="mt-10 pb-12 border-b border-neutral-800">
      <h2 className="text-3xl sm:text-4 xl lg:text-5xl text-center my-8 tracking-wider">
        Pricing  
      </h2>    
      <div className="flex flex-wrap justify-center ">
        {pricingOptions.map((option,index)=>{
          return(
            <div key={index} className="w-full sm:w-[45%] lg:w-[28%] p-2">
              <div className="p-7 border border-neutral-700 rounded-xl">
                <p className="text-3xl mb-3">
                  {option.title}
                  {option.title === "Pro" && (
                    <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-3 ml-2">(Most Popular)</span>
                  )}
                </p>
                <p className="mb-8">
                  <span className="text-4xl mt-4 mr-2">{option.price}</span>
                  <span className="text-neutral-400 tracking-tight">/Month</span>
                </p>
                <ul>
                  {option.features.map((feature, index)=>{
                    return (
                      <li key={index} className="mt-3 flex items-center">
                        <CheckCircle2 /> 
                        <span className="ml-2">{feature}</span>
                      </li>
                    )
                  })}
                </ul>
                <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-4 mt-10 tracking-tight text-[18px] hover:bg-orange-700 border border-orange-900 rounded-lg transition duration-200">Subscribe</a>
              </div>
            </div>
          )
        })}  
      </div>  
    </div>
  )
}

export default Pricing