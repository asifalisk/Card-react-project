
function Book(props){
    return(
        <div className="flex">
            <div className="book">
                <h2 className="title">Title : {props.title}</h2>
                <p className="author">Author : {props.author}</p>
                <p className="rating">Rating : {props.rating}</p>
            </div>
        </div>

    )
}

export default Book;