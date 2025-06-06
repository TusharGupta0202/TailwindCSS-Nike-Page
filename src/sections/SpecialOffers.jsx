import { offer } from '../assets/images'
import ClickButton from '../components/ClickButton'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} alt="Special Offers" className="w-full object-contain" />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span> offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premium selections to incredible savings, we offer unparallel value that sets us apart.</p>
        <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities designed to fulful your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</ p>
        <div className="mt-11 flex flex-wrap gap-4">
          <ClickButton label="Shop now" iconURL={arrowRight}/>
          <ClickButton label="Learn more" backgroundColor="bg-white" borderColor="boder-slate-gray" textColor="text-slate-gray" />
        </div>  
      </div>
    </section>
  )
}

export default SpecialOffers
