import { useState, useEffect } from 'react'
import Covid from './components/Covid';
import SearchBar from './components/SearchBar';

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
          <h1>WorldMeter Api Coronavirus</h1>
          <SearchBar 
            filterText = {filterText}
            onFilterTextChange={handleFilterTextChange}
          />
        {
          apiCovid.length !== 0 && <Covid datas = {apiCovid["Countries"] }  
                                      filterText={filterText}
                          />
          // <Covid datas = {apiCovid["Countries"]} />
        }
    </div>
  );
}

export default App;
