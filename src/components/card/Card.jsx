import "./card.scss";

export default function Card({id, title, cover}) {
    return (

        <section className="card">
        <div className='overlay'></div>
        <h3>{title}</h3>
        <img src={cover}alt={title}/>

        </section>
    )
}