
import AdminSideBar from "../Components/AdminSideBar";
import { BsSearch } from "react-icons/bs";
import {HiTrendingUp,HiTrendingDown} from "react-icons/hi";
import data from   "../assets/data.json"
import { BarChart, DoughnutChart } from "../Components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../Components/DashboardTable";
const Dashboard = () => {
  return (
    
    <div className ='admin-container'>
      <AdminSideBar/>
    <main className="dashboard">
      <div className="bar">
        <BsSearch/>
        <input
         type="text"
         placeholder="search for data,user,docs"
        />
      </div>
        <section className="widget-container">
        <WidgetItem 
        percent={70}
        amount={true}
        color="purple"
        value={321345}
        heading="Revenue"
        />
        <WidgetItem 
        percent={-70}
        amount={true}
        color="red"
        value={321345}
        heading="Transections"
        />
        <WidgetItem 
        percent={30}
        amount={false}
        color="black"
        value={345}
        heading="Products"
        />
          <WidgetItem 
        percent={30}
        amount={false}
        color="black"
        value={345}
        heading="Users"
        />
           </section>
           {/* next section */}
           <section className="graph-container"> 
           <div className="revenue-chart">
            <h2>Revenue & Transactions</h2>
            {/* graphhere */}
            <BarChart
            data_1 = {[12,45,67]}
            data_2 = {[65,89,90]}
            title_1="Revenue"
            title_2="Transections"
            bgColor_1="red"
            bgColor_2="blue"
            // horizontal={true}
            />
           </div>
           <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              {
                data.categories.map((i)=>( 
            <CategoryItem 
             key={i.heading}
             heading ={i.heading}
             value={i.value} 
             color={`hsl(${i.value},${i.value}%,50%)`}
             />
            ))}
             </div>
           </div>
           </section>
           <section className="transaction-container">
              <div className="gender-chart">
                <h2>Gender Ratio </h2>
                  {/* chart */}
                  <DoughnutChart
                  labels = {["Female","Male"]} 
                  data ={[12,19]} 
                  backgroundColor={["hsl(340,82%,56%)","rgba(53,162,235,0.8)"]}
                  cutout={90}
                  />
                  <p>
                  <BiMaleFemale/>
                  </p>
              </div>
              <Table data={data.transaction}/>
           </section>

      </main>  
      </div>
      
  )
}

interface  WidgetItemProps{
  heading:string;
  value:number;
  percent:number;
  color:string;
  amount?:Boolean;
}

const WidgetItem =({amount,color,percent,value,heading}:WidgetItemProps)=>(
<article className="widget">
  <div className="widget-info">
    <p>{heading}</p>
    <h4>{amount ? `$${value}`:value}</h4>
    {percent>0?(
    <span className="green"><HiTrendingUp/>+{percent}%{" "}</span>):(
    <span className ="red"><HiTrendingDown/>-{percent}%{" "}</span>)
    }
  </div>

  <div 
  className="widget-circle"
   style={{
      background:`conic-gradient(
      ${color}  ${(Math.abs(percent)/100)*360}deg,
      rgb(255,255,255) 0
    )`,
  }}>
<span color={color}>{percent}%</span>
  </div>
</article>);

interface CategoryItemProps{
  color:string,
  value:string
  heading:string
}

const CategoryItem =({color,value,heading}:CategoryItemProps)=>(
  <div className="category-item">

  <h5>{heading}</h5>
  <div>
    <div style={{
      backgroundColor:color,
      width:`${value}%`,
    }}>
    </div>
  </div>
  <span>{value}</span>
  </div>
)


export default Dashboard;
