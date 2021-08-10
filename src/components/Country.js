import { Bar, Doughnut } from "react-chartjs-2";
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
        <>
            <div className="grid container">
                <div className="row no-gutters">
                    <div className="col l-2 c-12">
                        <h3 style={{color: 'red'}}>Tên Nước: {Country}</h3>
                        <h4>Số Ca Nhiễm Mới: {new Intl.NumberFormat('de-DE').format(NewConfirmed)}</h4>
                        <h4>Tổng Ca Nhiễm: {new Intl.NumberFormat('de-DE').format(TotalConfirmed)}</h4>
                        <h4>Số Ca Ngẻo Mới: {new Intl.NumberFormat('de-DE').format(NewDeaths)}</h4>
                        <h4>Tổng Ca Ngẻo: {new Intl.NumberFormat('de-DE').format(TotalDeaths)}</h4>
                        <h4>Số Ca Phục Hồi Mới: {new Intl.NumberFormat('de-DE').format(NewRecovered)}</h4>
                        <h4>Tổng Số Ca Phục Hồi: {new Intl.NumberFormat('de-DE').format(TotalRecovered)}</h4>
                        <h4>Date: {Date}</h4>
                    </div>
                    <div className="col l-10 c-12">
                        <div className="row">
                            <div className="chart__1 l-8 c-12 ">
                                <Bar
                                    data={{
                                    labels: [
                                        "Số Ca Nhiễm Mới",
                                        "Tổng Ca Nhiễm",
                                        "Số Ca Ngẻo Mới",
                                        "Tổng Ca Ngẻo",
                                        "Tổng Số Ca Phục Hồi",
                                    ],
                                    datasets: [
                                        {
                                        label: "NewConfirmed",
                                       
                                        backgroundColor: [
                                            "#3e95cd",
                                            "#8e5ea2",
                                            "#3cba9f",
                                            "#e8c3b9",
                                            "#c45850"
                                        ],
                                        data: [NewConfirmed,TotalConfirmed, NewDeaths, TotalDeaths, TotalRecovered]
                                        }
                                    ]
                                    }}
                                    options={{
                                    legend: { display: false },
                                    title: {
                                        display: true,
                                        text: "Covid"
                                    }
                                    }}
                                />
                            </div>
                            <div className="chart__2 l-4 c-12 ">
                                <Doughnut
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: true,
                                        }}
                                    data={{
                                        labels: [
                                            "Số Ca Nhiễm Mới",
                                        "Tổng Ca Nhiễm",
                                        "Số Ca Ngẻo Mới",
                                        "Tổng Ca Ngẻo",
                                        "Tổng Số Ca Phục Hồi",
                                    ],
                                    datasets: [
                                        {
                                        label: "Covid",
                                        backgroundColor: [
                                            "#3e95cd",
                                            "#8e5ea2",
                                            "#3cba9f",
                                            "#e8c3b9",
                                            "#c45850"
                                        ],
                                        data: [NewConfirmed,TotalConfirmed, NewDeaths, TotalDeaths, TotalRecovered]
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
            
        </>
    )
}

export default Country
