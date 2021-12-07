import { Container, Progress } from "./styles";

interface ProgressBarProps {
  percentage: number;
}

export function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <Container>
      <Progress percentage={percentage} />
    </Container>
  );
}
