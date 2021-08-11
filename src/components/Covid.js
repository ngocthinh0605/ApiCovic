import Country from './Country'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

const Covid = ({ datas, filterText }) => {

  const [count, setCount] = useState({
        prev: 0,
        next: 15
      })
    const [hasMore, setHasMore] = useState(true);
    const [current, setCurrent] = useState(datas.slice(count.prev, count.next));
    const [filter, setFilter] = useState([]);

    var arrayFilter = [];  

    if(filterText !== ''){
    
      // eslint-disable-next-line
      const filter = datas.filter((data) => {
            if(data["Country"].indexOf(filterText) > -1){
              return data;
            }
          })

      arrayFilter = filter;
    }
   
      const getMoreData = () => {
       
        if (current.length === datas.length) {
          setHasMore(false);
          return;
        }
        
        setTimeout(() => {
          setCurrent(current.concat(datas.slice(count.prev + 15, count.next + 15)))
        }, 2000)
        setCount((prevState) => ({ prev: prevState.prev + 15, next: prevState.next + 15 }))
      }

    return (
        <>
            <InfiniteScroll
            dataLength={current.length}
            next={getMoreData}
            hasMore={filterText === '' ? hasMore : false }
            loader={<h4>Loading...</h4>}
            >
            {
                // eslint-disable-next-line
                arrayFilter.length === 0 ? current.map((data) => <Country key={data.ID} country={data}></Country>) : arrayFilter.map((data) => <Country key={data.ID} country={data}></Country>)
                
            }
            </InfiniteScroll>
        </>
    )
}

export default Covid
