import { useDispatch, useSelector } from "react-redux";
import { LineChart } from "../../../components/dashboard"
import { fetchBalanceHistory } from "../../../store/chart/thunk";
import { AppDispatch, RootState } from "../../../store/store";
import { useEffect } from "react";
import { Card, Shimmer } from "../../../components/ui";

const LineChartContainer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { balanceHistory, status } = useSelector((state: RootState) => state.chart);

  useEffect(() => {
    if (status.balanceHistory === "idle") {
      dispatch(fetchBalanceHistory());
    }
  }, [dispatch, status.balanceHistory]);

  if (status.balanceHistory === "loading") return (
    <Shimmer
      className="h-[360px] w-full"
    />
  );

  if (status.balanceHistory === "failed") return (
    <div>Error fetching balance history</div>
  );

  if (!balanceHistory) return null;

  return (
    <Card>
      <LineChart
        data={balanceHistory.data} // Sales data
        labels={balanceHistory.labels} // Days of the week
      />
    </Card>
  );
};

export default LineChartContainer;
