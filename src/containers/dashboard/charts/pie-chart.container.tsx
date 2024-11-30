import { useDispatch, useSelector } from "react-redux";
import { PieChart } from "../../../components/dashboard"
import { fetchExpenseStatistics } from "../../../store/chart/thunk";
import { AppDispatch, RootState } from "../../../store/store";
import { useEffect } from "react";
import { Card, Shimmer } from "../../../components/ui";

const PieChartContainer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { expenseStatistics, status } = useSelector((state: RootState) => state.chart);

  useEffect(() => {
    if (status.expenseStatistics === "idle") {
      dispatch(fetchExpenseStatistics());
    }
  }, [dispatch, status.expenseStatistics]);

  if (status.expenseStatistics === "loading") return (
    <Shimmer
      className="h-[420px] w-full"
    />
  );

  if (status.expenseStatistics === "failed") return (
    <div>Error fetching expense statistics</div>
  );

  if (!expenseStatistics) return null;

  return (
    <Card className="flex justify-center items-center">
      <PieChart
        data={expenseStatistics.data}
        labels={expenseStatistics.labels}
      />
    </Card>
  );
};

export default PieChartContainer;
