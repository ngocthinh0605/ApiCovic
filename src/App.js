import { useState, useEffect } from 'react'
import Covid from './components/Covid';
import SearchBar from './components/SearchBar';
import './app.css'
import './Grid.css'

function App() {

  const [apiCovid, setApiCovid] = useState([]);
  const [filterText, setFilterText] = useState('')

   useEffect(() =>{
    const getApiCovid = async () =>{
      const takeApiCovid = await fetchApiCovid();
      setApiCovid(takeApiCovid);
    }
    getApiCovid();
  },[]);

  const fetchApiCovid = async () =>{
    const res = await fetch('https://api.covid19api.com/summary');
    const dataApi = await res.json();
    return dataApi;
  }


  function handleFilterTextChange(filterText){
    console.log(filterText);
    setFilterText(filterText);
  }


  return (
    
    <div className="App">  
          <h1>Covid Trên Thế Giới</h1>
          <SearchBar 
            filterText = {filterText}
            onFilterTextChange={handleFilterTextChange}
          />
          
        {
          apiCovid.length === 0 ? 
            <div className="loading">
              Loading....
            </div> : <Covid datas = {apiCovid["Countries"] }  
                                      filterText={filterText}
                          />
          // <Covid datas = {apiCovid["Countries"]} />
        }
    </div>
  );
}

export default App;
