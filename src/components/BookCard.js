function BookCard(props) {
  return (
    <div className="card p-1 mb-2 bg-dark justify-content-center  text-light d-flex">
      {props.image && (
        <a href={`/books/${props.id}`}>
          <img className="card-img-top" src={props.image} />
        </a>
      )}
      <div className="card-body">
        <div>
          {props.title && <h5>{props.title}</h5>}
          {props.author && <h3>{props.author}</h3>}
          {props.published && <p>{props.published}</p>}
          {props.description && <p>{props.description}</p>}
        </div>
      </div>
    </div>
  );
}

export default BookCard;
