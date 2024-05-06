import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loaders from './Components/Loaders'


const Dashboard = lazy(()=>import("./Pages/Dashboard")) 
const BarChart = lazy(()=>import("./Pages/Charts/BarCharts"))
const LineChart = lazy(()=>import("./Pages/Charts/LineCharts"))
const PieChart  = lazy(()=>import("./Pages/Charts/PieCharts")) 


const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<Loaders/>}> 
        <Routes>
          <Route path='/admin/dashboard' element={<Dashboard/>}/> 
          {/* <Route path='/admin/product' element={<Products/>}/>    */}
          {/* Charts */}
          <Route path='/admin/charts' element={<BarChart/>}/>
          <Route path='/admin/Pies'    element={<PieChart/>}/>
          <Route path='/admin/lines'  element={<LineChart/>}/>
        </Routes>
        </Suspense>
      </Router>
      
    </>
  )
}

export default App
