import { useDispatch, useSelector } from "react-redux";
import { PieChart } from "../../../components/dashboard"
import { fetchExpenseStatistics } from "../../../store/chart/thunk";
import { AppDispatch, RootState } from "../../../store/store";
import { useEffect } from "react";

const PieChartContainer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { expenseStatistics, status } = useSelector((state: RootState) => state.chart);

  useEffect(() => {
    if (status.expenseStatistics === "idle") {
      dispatch(fetchExpenseStatistics());
    }
  }, [dispatch, status.expenseStatistics]);

  if (status.expenseStatistics === "loading") return (
    <div>
      Loading...
    </div>
  );

  if (status.expenseStatistics === "failed") return (
    <div>Error fetching expense statistics</div>
  );

  if (!expenseStatistics) return null;

  return (
    <PieChart
      data={expenseStatistics.data}
      labels={expenseStatistics.labels}
    />
  );
};

export default PieChartContainer;
