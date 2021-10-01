import { NavBarItem } from "./NavBarItem"

export const NavBar = ({items}) => {
    return (
        <nav id="menubar">
            <ul>
                {items.map(item => {
                    return <NavBarItem key={item.linkText} route={item.route} linkText={item.linkText} />
                })}
            </ul>
        </nav>
    )
}