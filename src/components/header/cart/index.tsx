import { IconButton } from "../../utilities/buttons/icon-button"
import { CartComponentType } from "./type"

export const Cart = (props: CartComponentType) => {
    return (
        <div className="relative"> 
            <IconButton noLabel={true} icon={"shopping_cart"} onClick={props.onClick}/>   
            {!props.noBadge && <div className="absolute top-0 right-0 size-3 p-2 rounded-full flex justify-center items-center text-[8px] bg-primary text-white">
                {props.badge >= 10 ? "9+" : props.badge}
            </div>}
        </div>
    ) 
}