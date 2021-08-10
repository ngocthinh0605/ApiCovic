import Country from './Country'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

const Covid = ({ datas, filterText }) => {
    datas.forEach(data => {
        if(data["Country"].indexOf(filterText) > -1){
        }
    })

    const [count, setCount] = useState({
        prev: 0,
        next: 10
      })
      const [hasMore, setHasMore] = useState(true);
      const [current, setCurrent] = useState(datas.slice(count.prev, count.next))
      const getMoreData = () => {
        if (current.length === datas.length) {
          setHasMore(false);
          return;
        }
        setTimeout(() => {
          setCurrent(current.concat(datas.slice(count.prev + 10, count.next + 10)))
        }, 2000)
        setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
      }

    return (
        <>
            <InfiniteScroll
            dataLength={current.length}
            next={getMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            >
            {
                // eslint-disable-next-line
                current.map((data) => {
                    if(filterText === ''){
                            return <Country key={data.ID} country={data}></Country>
                        }else if(data["Country"].indexOf(filterText) > -1){
                            return <Country key={data.ID} country={data}></Country>
                        }
                })
            }
            </InfiniteScroll>
        </>
    )
}

export default Covid
