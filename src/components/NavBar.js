import { NavBarItem } from "./NavBarItem"

export const NavBar = ({items}) => {
    return (
        <nav>
            <ul>
                {items.map(item => {
                    return <NavBarItem route={item.route} linkText={item.linkText} />
                })}
            </ul>
        </nav>
    )
}