
function BookCard(props) {
    return (
        <div >
            <img src={props.image} />
            <div>
                {props.title && <h2>{props.title}</h2>}
                {props.author && <h3>{props.author}</h3>}
                {props.published && <p>{props.published}</p>}
            </div>
        </div>
    );
}

export default BookCard
