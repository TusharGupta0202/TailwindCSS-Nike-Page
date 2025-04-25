import { star } from "../assets/icons"


const ReviewCard = ({rating,feedback,customerName,imgURL}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt="customer" className="w-[120px] h-[120px] rounded-full object-cover" />
        <p className="info-text text-center mt-6 max-w-sm">{feedback}</p>
        
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img src={star} alt="star" width={24} height={24} className="object-contain m-0"  />
        <p className="text-xl txt-montserrat text-slate-gray ">({rating} / 5)</p>
        </div>

        <h3 className="font-palanquin text-3xl font-bold mt-1 text-center">{customerName}</h3>
        
    </div>
  )
}

export default ReviewCard