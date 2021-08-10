
const Country = ({country}) => {
    const {Country,
        NewConfirmed,
        TotalConfirmed,
        NewDeaths,
        TotalDeaths,
        NewRecovered,
        TotalRecovered,
        Date} = country;
    return (
        <div>
            <h3 style={{color: 'red'}}>Name: {Country}</h3>
            <h4>NewConfirmed: {NewConfirmed}</h4>
            <h4>TotalConfirmed: {TotalConfirmed}</h4>
            <h4>NewDeaths: {NewDeaths}</h4>
            <h4>TotalDeaths: {TotalDeaths}</h4>
            <h4>NewRecovered: {NewRecovered}</h4>
            <h4>TotalRecovered: {TotalRecovered}</h4>
            <h4>Date: {Date}</h4>
        </div>
    )
}

export default Country
