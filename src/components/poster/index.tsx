import { usePosterStore } from "../../stores/product/poster-store"
import { IconButton } from "../utilities/buttons/icon-button"

export const Poster = () => {
    const example = [ 
        { id: 11, label: "slide1" },
        { id: 22, label: "slide2" },
        { id: 13, label: "slide3" },
        { id: 24, label: "slide4" }
    ]

    const poster = usePosterStore()

    return (
        <div className="container relative w-full h-96 my-5">
            <div className="w-[95%] h-[95%] mx-auto bg-gray-200">
            {example[poster.posterIndex].label}
            </div>
            <IconButton 
                noLabel={true} 
                icon={"arrow_back_ios"} 
                className="bg-transparent absolute left-0 top-1/2 -translate-y-1/2" 
                onClick={() => poster.backPoster(example.length)}
            />
            <IconButton 
                noLabel={true}
                icon={"arrow_forward_ios"} 
                className="bg-transparent absolute right-0 top-1/2 -translate-y-1/2" 
                onClick={() => poster.fowardPoster(example.length)}
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-center gap-1">
                {example.map((item, index) => {
                    return <div key={item.id} className={`h-2 w-2 rounded-full duration-200 bg-gray-md ${index === poster.posterIndex && "bg-primary w-4"}`}/>
                })}
            </div>
        </div>  
    )  
}