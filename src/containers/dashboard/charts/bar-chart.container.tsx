import { useDispatch, useSelector } from "react-redux";
import { BarChart } from "../../../components/dashboard";
import { fetchWeeklyActivity } from "../../../store/chart/thunk";
import { AppDispatch, RootState } from "../../../store/store";
import { Suspense, useEffect } from "react";
import { Card, Shimmer } from "../../../components/ui";

const BarChartContainer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { weeklyActivity, status } = useSelector((state: RootState) => state.chart);

  useEffect(() => {
    if (status.weeklyActivity === "idle") {
      dispatch(fetchWeeklyActivity());
    }
  }, [dispatch, status.weeklyActivity]);

  if (status.weeklyActivity === "loading") return (
    <Shimmer
      className="h-[420px] w-full"
    />
  );

  if (status.weeklyActivity === "failed") return (
    <div>Error fetching weekly activity</div>
  );

  if (!weeklyActivity) return null;

  return (
    <Suspense fallback={
      <Shimmer
        className="h-[360px] w-full"
      />
    }>
      <Card>
        <BarChart
          data={weeklyActivity.datasets.map((dataset) => ({
            label: dataset.label,
            values: dataset.data,
          }))}
          labels={weeklyActivity.labels}
        />
      </Card>
    </Suspense>
  );
};

export default BarChartContainer;
