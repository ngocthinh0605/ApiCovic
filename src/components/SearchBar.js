

const SearchBar = ({
    filterText,
    onFilterTextChange}) => {

    function handleFilterTextChange (e){
        onFilterTextChange(e.target.value);
    }
    return (
        <div>
            <div>
                <label>Nhập Tên Nước: </label>
            </div>
            <input
                type='text'
                placeholder='Nhập Tên Nước....'
                value={filterText}
                onChange={handleFilterTextChange}
            ></input>
        </div>
    )
}

export default SearchBar
