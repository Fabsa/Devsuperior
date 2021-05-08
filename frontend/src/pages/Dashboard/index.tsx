import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";



const DashBoard = () => {
    return (
        <>
        <NavBar />
        <div className="container">
  
          <h1 className="text-primary px-3">DashBoard de Vendas</h1>
          <div className="row px-3">
            <div className="col-sm-6">
              <h5 className="text-center text-secodary">Taxa de sucesso (%)</h5>
              <BarChart />
            </div>
            <div className="col-sm-6">
              <h5 className="text-center text-secodary">Todas vendas</h5>
              <DonutChart />
            </div>
  
          </div>
          <div className="py-3">
           <h2 className="text-primary">Todas vendas</h2>
          </div>
          <DataTable />
        </div>
        <Footer />
      </>

      
    );
  }
  export default DashBoard;