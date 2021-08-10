

const SearchBar = ({
    filterText,
    onFilterTextChange}) => {

    function handleFilterTextChange (e){
        onFilterTextChange(e.target.value);
    }
    return (
        <div>
            <div>
                <label>Search Country: </label>
            </div>
            <input
                type='text'
                placeholder='Search Country....'
                value={filterText}
                onChange={handleFilterTextChange}
            ></input>
        </div>
    )
}

export default SearchBar
