import { useEffect, useState } from "react";
import { ProgressBar } from "./components/ProgressBar";
import { Container } from "./styles";

function App() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (percentage < 100) {
      setInterval(() => {
        setPercentage((prevState) => prevState + 25);
      }, 1000);
    }
  }, [percentage]);

  return (
    <Container>
      <ProgressBar percentage={percentage} />
    </Container>
  );
}

export default App;
