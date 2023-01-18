import { useContext } from "react";
import { RatingContext } from "../App";

export default function MoveUpdate() {
  const rateContext = useContext(RatingContext);

  return (
    <div>
      <button onClick={() => rateContext.dispatchEvent("decrement10")}>
        &lt;&lt;
      </button>
      <button onClick={() => rateContext.dispatchEvent("decrement1")}>
        &lt;
      </button>
      <button onClick={() => rateContext.dispatchEvent("increment1")}>
        &gt;
      </button>
      <button onClick={() => rateContext.dispatchEvent("increment10")}>
        &gt;&gt;
      </button>
    </div>
  );
}
