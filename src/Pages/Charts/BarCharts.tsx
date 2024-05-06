import AdminSideBar from "../../Components/AdminSideBar"
import { BarChart } from "../../Components/Charts"

const BarCharts = () => {
  return (
    <>

      <div className ='admin-container'><AdminSideBar/>
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
        
          <BarChart 
           data_1={[2,90,12,40,23,58]}
           data_2={[234,54,9,12,134,-5]}
           title_1="Products"
           title_2="user"
           bgColor_1="grey"
           bgColor_2="blue"
          />
            <h1>Top selling Products and Users</h1>
        </section>

        <section>
          <BarChart
          horizontal={true}
          data_1={[12,23,4,5,9,23]}
          title_1="Order"
          bgColor_1="red"
          />
          <h1>Order Over the year</h1>
        </section>


      </main>
      </div>
    

    </>
  )
}

export default BarCharts
