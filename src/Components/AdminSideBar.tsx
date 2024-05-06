import { Link, Location, useLocation } from "react-router-dom"
import {IconType} from "react-icons"
import {RiDashboard2Line } from "react-icons/ri"

import { MdBarChart } from "react-icons/md"
import { FaChartLine, FaChartPie } from "react-icons/fa"
const AdminSideBar = () => {
  const location =useLocation()
  return (<aside>
   <h2>Admin</h2>
    <DivOne location={location}/>
   <DivTwo location={location}/>
  </aside>
  )
}
const DivOne =({location}:{location:Location})=>(
    <div>
    <h5>Dashboard</h5>
    <ul>
        <Li 
        url="/admin/dashboard"
        text="Dashboard"
        Icon={RiDashboard2Line}
        location={location}/> 
        {/* products
        
        <Li 
        url="/admin/product"
        text="Products"
        Icon={RiShoppingBag2Fill}
        location={location}/> 
    */}
    </ul>
   </div>

)
const DivTwo=({location}:{location:Location})=>(
    <div>
    <h5>charts</h5>
    <ul>
        <Li 
        
        url="/admin/charts"
        text="chart"
        Icon={MdBarChart}
        location={location}/> 
        {/* products */}
        <Li 
        url="/admin/Pies"
        text="Pie "
        Icon={FaChartPie}
        location={location}/> 
      {/* transections */}
        <Li 
        url="/admin/lines"
        text="Line"
        Icon={FaChartLine}
        location={location}/> 
       
      
    </ul>
   </div>


)
//type
interface LiProps {url:string,text:string,location:Location,Icon:IconType}
//make the functio
const Li =({url,text,location,Icon}:LiProps)=>(
    <li style={{
        backgroundColor:location.pathname.includes(`${url}`)? "lightcyan":"whiteSomke"
    }}>
    <Link to={url}>
        <Icon/>
        {text}
        </Link>
    </li> 
   )
export default AdminSideBar
