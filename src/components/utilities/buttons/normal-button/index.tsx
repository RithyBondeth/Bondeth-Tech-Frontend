import { NormalButtonProps } from "../type"

export const NormalButton = (props: NormalButtonProps) => {
    return (
        <div 
            className={`
             w-fit py-2 px-3 rounded-md cursor-pointer duration-200 border-2
             border-white text-sm text-white bg-primary hover:scale-105 hover:text-primary hover:bg-white
            hover:border-primary ${props.className}`}
            onClick={props.onClick}
        >
            <p>{props.label}</p>
        </div>
    )
}