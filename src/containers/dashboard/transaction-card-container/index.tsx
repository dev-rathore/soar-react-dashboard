import { useDispatch, useSelector } from "react-redux";
import { TransactionCard } from "../../../components/dashboard";
import { AppDispatch, RootState } from "../../../store/store";
import { useEffect } from "react";
import { fetchTransactions } from "../../../store/transaction/thunk";
import { Shimmer } from "../../../components/ui";

const TransactionCardContainer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { transactions, status } = useSelector((state: RootState) => state.transaction);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTransactions());
    }
  }, [dispatch, status]);

  if (status === "loading") return (
    <Shimmer
      className="h-[260px] w-full"
    />
  );

  if (status === "failed") return (
    <div>Error fetching transactions</div>
  );

  if (!transactions) return null;

  return <TransactionCard transactions={transactions} />;
};

export default TransactionCardContainer;
