import { useDispatch, useSelector } from "react-redux";
import { BarChart } from "../../../components/dashboard";
import { fetchWeeklyActivity } from "../../../store/chart/thunk";
import { AppDispatch, RootState } from "../../../store/store";
import { Suspense, useEffect } from "react";

const BarChartContainer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { weeklyActivity, status } = useSelector((state: RootState) => state.chart);

  useEffect(() => {
    if (status.weeklyActivity === "idle") {
      dispatch(fetchWeeklyActivity());
    }
  }, [dispatch, status.weeklyActivity]);

  if (status.weeklyActivity === "loading") return (
    <div>
      Loading...
    </div>
  );

  if (status.weeklyActivity === "failed") return (
    <div>Error fetching weekly activity</div>
  );

  if (!weeklyActivity) return null;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BarChart
        data={weeklyActivity.datasets.map((dataset) => ({
          label: dataset.label,
          values: dataset.data,
        }))}
        labels={weeklyActivity.labels}
      />
    </Suspense>
  );
};

export default BarChartContainer;
