export const AppHeader = ({headerText, sloganText}) => {
    return (
        <header id="page-header">
            <img src={process.env.PUBLIC_URL + '/CatDog.jpg'} alt="" />
            <h1>{headerText}</h1>
            <h2>{sloganText}</h2>
        </header>
    )
}