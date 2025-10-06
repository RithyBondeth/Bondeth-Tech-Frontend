import { IconButton } from "../../utilities/buttons/icon-button"
import { SearchComponentProps } from "./type"

export const Search = (props: SearchComponentProps) => {
    return (
        <div className="h-14 w-1/3 flex items-center p-2 rounded-md border-2 border-gray-sm">
            <IconButton noLabel={true} icon="tune" onClick={() => {}}/>
            <input type="text" name="search" placeholder={props.placeholder} className="w-full px-2 text-sm outline-none bg-transparent"/>
            <IconButton noLabel={true} icon="search" onClick={() => {}}/>
        </div>
    )   
}