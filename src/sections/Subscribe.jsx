import ClickButton from "../components/ClickButton"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold ">Sign Up for
        <span className="text-coral-red"> Updates </span>
        & Newsletter
      </h3>

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p=2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="" placeholder="subscribe@nike.com" className="input border-0"  />
        <div className="flex max-sm:justify-end max-sm:w-full">
          <ClickButton label="Sign Up" fullWidth /> 
        </div>
      </div>
    </section>
  )
}

export default Subscribe



// lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full
