import { IconLabelProps } from "../type"

export const IconLabel = (props: IconLabelProps) => {
    return (
        <div className={`flex justify-center items-center gap-1 p-1 ${props.className}`}>
            <span className="material-symbols-outlined">{props.icon}</span>
            <p className="text-lg font-medium">{props.label}</p>
        </div>
    )
}