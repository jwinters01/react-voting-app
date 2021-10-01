export const AppHeader = ({headerText}) => {
    return (
        <header id="page-header">
            <img src={process.env.PUBLIC_URL + '/CatDog.jpg'} alt="" />
            <h1>{headerText}</h1>
            <h2> .. Carpe Diem</h2>
        </header>
    )
}