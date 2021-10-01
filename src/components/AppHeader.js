export const AppHeader = ({headerText, sloganText}) => {
    return (
        <header id="page-header">
            <h1>{headerText}</h1>
            <img src={process.env.PUBLIC_URL + '/CatDog.jpg'} alt="" />
            <h2>{sloganText}</h2>
        </header>
    )
}