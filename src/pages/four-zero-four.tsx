import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui";

const FourZeroFour: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-screen">
      <h1 className="text-4xl font-semibold text-app-black">404 - Page Not Found</h1>
      <div className="w-36">
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default FourZeroFour;
