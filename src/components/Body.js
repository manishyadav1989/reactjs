const Card = (props) => {
    return (
        <div className="item">
            <div className="image">
                <p>image</p>
            </div>
            <div className="details">
                <p>details</p>
            </div>
        </div>
    );
}

const Body = () => {
    return (
        <div className="container">
            <div className="search">
                <input type="text" className="inputBox" name="search" />
                <button className="btnClass">Search</button>
            </div>
            <div className="card">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Body;