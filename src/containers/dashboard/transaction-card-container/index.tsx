import { useDispatch, useSelector } from "react-redux";
import { TransactionCard } from "../../../components/dashboard";
import { AppDispatch, RootState } from "../../../store/store";
import { useEffect } from "react";
import { fetchTransactions } from "../../../store/transaction/thunk";

const TransactionCardContainer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { transactions, status } = useSelector((state: RootState) => state.transaction);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTransactions());
    }
  }, [dispatch, status]);

  if (status === "loading") return (
    <div>
      Loading...
    </div>
  );

  if (status === "failed") return (
    <div>Error fetching transactions</div>
  );

  if (!transactions) return null;

  return <TransactionCard transactions={transactions} />;
};

export default TransactionCardContainer;
