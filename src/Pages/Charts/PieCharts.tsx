
import AdminSideBar from '../../Components/AdminSideBar'
import { DoughnutChart, PieChart } from '../../Components/Charts'
import {categories} from "../../assets/data.json"
const PieCharts = () => {
  return (
    <>
      <div className ='admin-container'>
      <AdminSideBar/>
      <main className="chart-container">
        <h1>Section Charts</h1>
        <section>
         <div>
        <PieChart
        labels={["Processing","shipped","deliverd"]}
        data={[12,4,56]}
        backgroundColor={["red","green","blue"]}     
             
        />
        </div> 
        <h1>Order Status</h1>
        </section>
        <section>
        <div>
        <DoughnutChart
        labels={categories.map((i)=>i.heading)}
        data={categories.map((i)=>i.value)}
        backgroundColor={categories.map((i)=>`hsl(${i.value*4},${i.value}%,50%)`)}
        cutout={90}
         offset={[0,0,0,80]}
         />
        </div>
        <h2>Product details</h2>
        </section>
        </main>



      </div>
      
    </>
  )
}

export default PieCharts;
