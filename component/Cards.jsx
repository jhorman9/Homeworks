const Cards = ({title, item, item1, item2,bg}) =>{
    return (
        <div className="card" style={{background:`${bg}`}}>
            <h3>{title}</h3>
            <ul>
                <li>{item}</li>
                <li>{item1}</li>
                <li>{item2}</li>
            </ul>
        </div>
    )
}

export default Cards;