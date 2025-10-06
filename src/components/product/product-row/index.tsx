import { NormalButton } from "../../utilities/buttons/normal-button"
import { IconLabel } from "../../utilities/labels/icon-label"
import { ProductCard } from "../product-card"
import { ProductRowProps } from "../type"

export const ProductRow = (props: ProductRowProps) => {
    return (
        <div className="container mb-10">
            <div className="w-full flex justify-between items-center">
                <IconLabel icon={props.categoryHeader.icon} label={props.categoryHeader.label}/>
                <NormalButton label={"See All"} onClick={props.categoryHeader.onClick}/>
            </div>
            <div className="w-full flex justify-start gap-5 overflow-x-scroll no-scrollbar">
                {[1,2,3,4,5,6,7].map((product) => (
                    <ProductCard key={product}/>
                ))}
            </div>
        </div>
    )
}