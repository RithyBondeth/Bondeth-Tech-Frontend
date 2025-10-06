import { IconButton } from "../../utilities/buttons/icon-button"
import { NormalButton } from "../../utilities/buttons/normal-button"
import { Search } from "../search"
import { NavbarComponentProps } from "./type"
import { BondethTechLogo } from "../constant"
import { Cart } from "../cart"

export const Navbar = (props: NavbarComponentProps) => {
    return (
        <nav className="flex items-center justify-between shadow-sm p-2 bg-white">
            <div className="flex items-center">
                <img src={BondethTechLogo} alt="bondethtech-log" className="h-14"/>
                <div>
                    <p className="text-md font-medium">Bondeth Tech</p>
                    <p className="text-xs">World of Electornics</p>
                </div>
            </div>
            <Search placeholder={"Find your favorite product..."}/>
            <div className="flex items-center justify-center [&>div]:mx-2">
               {props.isAuthenicated && <IconButton noLabel={true} icon={"account_circle"} onClick={() => {}}/>}
               {!props.isAuthenicated && <NormalButton label="Login" onClick={() => {}}/>}
               <Cart noBadge={false} badge={12} onClick={() => {}}/>
            </div>
        </nav>
    )
}