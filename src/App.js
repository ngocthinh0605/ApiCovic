import { useState, useEffect } from 'react'
import Covid from './components/Covid';
import SearchBar from './components/SearchBar';
import './app.css';
import './Grid.css';
import { Bar, Doughnut } from "react-chartjs-2";


function App() {
  

  const [apiCovid, setApiCovid] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [global, setGlobal] = useState({});
  
   useEffect(() =>{
    const getApiCovid = async () =>{
      const takeApiCovid = await fetchApiCovid();
      setGlobal(takeApiCovid['Global']);
      setApiCovid(takeApiCovid["Countries"]);
    }
    getApiCovid();
  },[]);

  console.log(global);

  const {NewConfirmed,
        NewDeaths,
        NewRecovered,
        TotalConfirmed,
        TotalDeaths,
        TotalRecovered,
        Date} = global;


  const fetchApiCovid = async () =>{
    const res = await fetch('https://api.covid19api.com/summary');
    const dataApi = await res.json();
    return dataApi;
  }

  function handleFilterTextChange(filterText){
    
    
    var text = filterText.charAt(0).toUpperCase();
    console.log(text + filterText.slice(1));

    setFilterText(text + filterText.slice(1));
  }


  return (
    <div className="App">  
              
                    <h1>XEM COVID ĐIIIIIIII!!!</h1>
                    <h2>Tổng số Country: {apiCovid.length}</h2>
                    <SearchBar 
                      filterText = {filterText}
                      onFilterTextChange={handleFilterTextChange}
                    />

                    <div className="covid__in-the-world">
                      <div className="grid wide">
                        <div className="covid__global-title">
                          <h2>COVID IN THE WORLD</h2>
                            <h4>Số Ca Nhiễm Mới: {new Intl.NumberFormat('de-DE').format(NewConfirmed)}</h4>
                            <h4>Tổng Ca Nhiễm: {new Intl.NumberFormat('de-DE').format(TotalConfirmed)}</h4>
                            <h4>Số Ca Ngẻo Mới: {new Intl.NumberFormat('de-DE').format(NewDeaths)}</h4>
                            <h4>Tổng Ca Ngẻo: {new Intl.NumberFormat('de-DE').format(TotalDeaths)}</h4>
                            <h4>Số Ca Phục Hồi Mới: {new Intl.NumberFormat('de-DE').format(NewRecovered)}</h4>
                            <h4>Tổng Số Ca Phục Hồi: {new Intl.NumberFormat('de-DE').format(TotalRecovered)}</h4>
                            <h4>Date: {Date}</h4>
                          <div className="row no-gutters">
                              <div className="covid__global-left col l-6 c-12">
                              <Bar
                                    data={{
                                    labels: [
                                        "Số Ca Nhiễm Mới",
                                        // "Tổng Ca Nhiễm",
                                        "Số Ca Ngẻo Mới",
                                        "Tổng Ca Ngẻo",
                                        "Tổng Số Ca Phục Hồi",
                                    ],
                                    datasets: [
                                        {
                                        
                                        label: "Số Ca Nhiễm Mới",
                                        
                                        backgroundColor: [
                                            "#3e95cd",
                                            // "#8e5ea2",
                                            "#3cba9f",
                                            "#e8c3b9",
                                            "#c45850"
                                        ],
                                        data: [NewConfirmed, NewDeaths, TotalDeaths, TotalRecovered]
                                        }
                                    ]
                                    }}
                                    options={{
                                    legend: { display: false },
                                    title: {
                                        display: false,
                                        text: "Covid"
                                    }
                                    }}
                                />
                              </div>  
                              <div className="covid__global-right col l-6 c-12">
                              <Doughnut
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: true,
                                        }}
                                    data={{
                                        labels: [
                                          "Số Ca Nhiễm Mới",
                                          // "Tổng Ca Nhiễm",
                                          "Số Ca Ngẻo Mới",
                                          "Tổng Ca Ngẻo",
                                          "Tổng Số Ca Phục Hồi",
                                    ],
                                    datasets: [
                                        {
                                        label: "Covid",
                                        backgroundColor: [
                                            "#3e95cd",
                                            // "#8e5ea2",
                                            "#3cba9f",
                                            "#e8c3b9",
                                            "#c45850"
                                        ],
                                        data: [NewConfirmed, NewDeaths, TotalDeaths, TotalRecovered]
                                        }
                                    ]
                                    }}
                                    option={{
                                    title: {
                                        display: true,
                                        text: "Covid (millions) in 2050"
                                    }
                                    }}
                                />
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {
                      apiCovid.length === 0 ? 
                      <div className='loading'>
                        <h1>Loading...</h1>
                      </div> : <Covid datas = {apiCovid}  
                                      filterText={filterText}
                                      />
                    }
              
            </div>
  );
}

export default App;
