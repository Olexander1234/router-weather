import { MainPage } from 'MainPage'
import { Chart } from 'chart.js'
import { App } from 'components/App'
import { MoreInfoChartComponent } from 'components/MoreInfoChartComponent'
import { WeatherCard } from 'components/WeatherCard'
import { WeekForecastLocationAPI } from 'components/WeekForecastLocationAPI'
import {createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App/>, 
            children: [
                {
                    element: <MainPage/>  ,
                    index: true,   
                
                }, 
                {        path: '/weather',
                    element: <WeatherCard/>, 
                  
                    children: [
                        {    path: '/weather/:weatherId/hourly',
                            element: <Chart/>,
                           
                        },
                        {
                         path: '/weather/:weatherId/weekly',
                        element: <WeekForecastLocationAPI/>, 
                        
                        },
                        {   path: '/weather/:weatherId/more',
                            element: <MoreInfoChartComponent/>, 
                          
                        }                 
                             ]
                }
,
           

            ]
        }
    ]
)