
import AdminSideBar from '../../Components/AdminSideBar'
import { LineChart } from '../../Components/Charts'

const LineCharts = () => {
  return (
    <>
      <div className ='admin-container'>
      <AdminSideBar/>
      
      <main className="chart-container">
        <h1>Line Charts</h1>
        <section>
        <LineChart
        data={[1,4,6,8,2,5,7]}
        label='Users'
        borderColor='grey'
        // backgroundColor='blue'
        />
        <h2>Active Users</h2>
        </section>
        </main>
      </div>
    </>
  )
}

export default LineCharts
