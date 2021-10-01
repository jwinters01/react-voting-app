export const AppHeader = ({headerText}) => {
    return (
        <header id="page-header">
            <h1>{headerText}</h1>
            <img src={process.env.PUBLIC_URL + '/CatDog.jpg'} alt="" />
            <h2> .. Carpe Diem</h2>
        </header>
    )
}