import { useLocation } from "react-router-dom";
import { Header } from "../../components";
import { DetailedMovie } from "../../components";

export function Detail() {
  const location = useLocation();

  return (
    <>
      <Header onInputChange={() => {}} />
      <DetailedMovie {...location.state} />
    </>
  );
}
