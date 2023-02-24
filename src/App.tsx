import "katex/dist/katex.min.css";
import { Katexes } from "./packages/components/Katexes";

function App() {
  return (
    <Katexes
      mathString={String.raw`集合$G$が群であるとは\begin{align}xy\in G\end{align}および\begin{equation}xe = ex = x\end{equation}および\begin{equation}xe = ex = x\end{align}`}
    />
  );
}

export default App;
