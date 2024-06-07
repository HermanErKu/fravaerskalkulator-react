import { useSearchParams } from "react-router-dom";


const Studiefag = () => {
  const [queryParameters] = useSearchParams()
  const linjeId = queryParameters.get("linjeId")
  console.log(linjeId)

  return (
    <div>
      <h1>Studiefag</h1>
    </div>
  );
};

export default Studiefag;