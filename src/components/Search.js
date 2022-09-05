const Search = (props) => {
    return (
        <div className='search' >
            <form onSubmit={props.doSearch} >
                <input onChange={props.handleSearch} type='text' />
                <button className="btn btn-primary" type='submit'>Search</button>
                <select defaultValue='Sort' onChange={props.handleSort}  >
                    <option disabled value="Sort">Sort</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>
            </form>
        </div>
    );
}

export default Search;