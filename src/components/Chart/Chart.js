import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const amountValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxAmount = Math.max(...amountValues);
  //   console.log(amountValues);
  //   console.log(maxAmount);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxAmount}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
