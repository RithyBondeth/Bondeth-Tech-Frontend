import { IconLabel } from "../../utilities/labels/icon-label"

export const CategoryMenu = () => {
    return (
        <div className="container mb-10">
            <div className="w-full flex justify-start">
                <IconLabel icon={"store"} label={"Category"}/>
            </div>
            <div className="grid grid-cols-4 mx-5">
            {[1,2,3,4,5].map(() => (
                <div className="flex flex-col justify-center items-center py-5 px-10 mt-5 mr-20 rounded-md cursor-pointer bg-primary text-white">
                    <span className="material-symbols-outlined">devices</span>
                    <p className="mt-2">Laptop</p>
                </div> 
            ))}
            </div>
        </div>
    )
}