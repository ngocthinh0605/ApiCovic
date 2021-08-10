import { useState, useEffect } from 'react'
import Covid from './components/Covid';
import SearchBar from './components/SearchBar';
import InfiniteScroll from 'react-infinite-scroll-component';
import './app.css'
import './Grid.css'

function App() {

  const [apiCovid, setApiCovid] = useState([]);
  const [current, setCurrent] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [hasMore, setHasMore] = useState(true);

  const [count, setCount] = useState({
    prev: 0,
    next: 10
  })
 

   useEffect(() =>{
    const getApiCovid = async () =>{
      const takeApiCovid = await fetchApiCovid();
      setApiCovid(takeApiCovid["Countries"]);
    }
    getApiCovid();
  },[]);

  const fetchApiCovid = async () =>{
    const res = await fetch('https://api.covid19api.com/summary');
    const dataApi = await res.json();
    return dataApi;
  }

  if(current.length === 0 ){
      setCurrent(apiCovid.slice(count.prev, count.next))
    }
  const getMoreData = () => {
    if (current.length === apiCovid.length) {
      setHasMore(false);
      return;
    }
    
    setTimeout(() => {
      setCurrent(current.concat(apiCovid.slice(count.prev + 10, count.next + 10)))
    }, 2000)
    setCount((prevState) => ({prev: prevState.prev + 10, next: prevState.next + 10 }))
  }


  function handleFilterTextChange(filterText){
    console.log(filterText);
    setFilterText(filterText);
  }
  return (
            <div className="App">  
              <InfiniteScroll
                    dataLength={current.length}
                    next={getMoreData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                  >
                    <h1>Covid Trên Thế Giới</h1>
                    <SearchBar 
                      filterText = {filterText}
                      onFilterTextChange={handleFilterTextChange}
                    />
                    
                    {
                      current && <Covid datas = {current}  
                                          filterText={filterText}
                                      />
                    }
                    </InfiniteScroll>
            </div>
  );
}

export default App;
