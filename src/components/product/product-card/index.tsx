import { IconButton } from "../../utilities/buttons/icon-button"

export const ProductCard = () => {
    return (
        <div className="min-w-64 flex flex-col p-2 my-5 rounded-lg shadow-md duration-200 hover:scale-105 bg-white">
            <div className="min-h-52 rounded-lg bg-cover bg-center bg-no-repeat bg-gray-sm" style={{backgroundImage: `url(""))`}}/>
            <div className="pt-5 p-2 text-sm [&>p]:mb-2">
                <p>iPhone 15 Pro Max</p>
                <p className="font-medium text-red-500">2120$</p>
                <IconButton 
                    noLabel={false} 
                    icon={"shopping_bag"} 
                    label={"Add to cart"} 
                    className="w-fit mt-3 flex-row-reverse items-center text-xs bg-primary text-white [&>span]:text-white" 
                    onClick={() => {}}
                />
            </div> 
       </div>
    )
}