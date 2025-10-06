import { IconButtonProps } from "../type"

export const IconButton = (props: IconButtonProps) => {
    return (
        <div className={`flex items-center p-2 rounded-md bg-gray-sm cursor-pointer ${props.className}`} onClick={props.onClick}>
            {!props.noLabel && <p>{props.label}</p>}
            <span className="material-symbols-outlined text-primary">{props.icon}</span>
        </div>
    )
}