import Country from './Country'
const Covid = ({ datas, filterText }) => {
    datas.forEach(data => {
        if(data["Country"].indexOf(filterText) > -1){
        }
    })

    return (
        <>
            {
                datas
                .map((data) => {
                    if(filterText === ''){
                            return <Country key={data.ID} country={data}></Country>
                        }else if(data["Country"].indexOf(filterText) > -1){
                            return <Country key={data.ID} country={data}></Country>
                        }
                })
            }
        </>
    )
}

export default Covid
