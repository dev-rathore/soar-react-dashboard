import { useEffect } from "react";
import { CreditCard } from "../../../components/dashboard"
import { fetchCards } from "../../../store/card/thunk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { Shimmer } from "../../../components/ui";

const CreditCardContainer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { cards, status } = useSelector((state: RootState) => state.card);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCards());
    }
  }, [dispatch, status]);

  if (status === "loading") return (
    <Shimmer
      className="h-[260px] w-full"
    />
  );

  if (status === "failed") return (
    <div>Error fetching card details</div>
  );

  if (!cards) return null;

  return (
    <div className="flex gap-8 overflow-x-auto">
      {
        cards.map((card, i) => (
          <CreditCard
            key={i}
            variant={i === 0 ? 'primary' : 'secondary'}
            data={card}
          />
        ))
      }
    </div>
  );
};

export default CreditCardContainer;
