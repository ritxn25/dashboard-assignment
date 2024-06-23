import react from "react"
import Chartline from "./Chartline";
import Barchart from "./Barchart";
import "./LineChart.css";

const LineandBar = ()=>{
    return(
        <div className="line-chart">
           <Chartline/>
           <Barchart />
        </div>
    );
};

export default LineandBar;