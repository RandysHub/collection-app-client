
function BookCard(props) {
    return (
        
        <div >
            {props.image?<a href={`/books/${props.id}`}><img src={props.image} /></a>:<h2>{props.title}</h2>}
            <div>
                {props.author && <h3>{props.author}</h3>}
                {props.published && <p>{props.published}</p>}
                {props.description && <p>{props.description}</p>}
            </div>
        </div>
    );
}

export default BookCard
