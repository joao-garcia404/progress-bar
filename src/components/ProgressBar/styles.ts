import styled from "styled-components";

interface ProgressProps {
  percentage: number;
}

export const Container = styled.div`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  background: #ccc;
  overflow: hidden;
`;

export const Progress = styled.div<ProgressProps>`
  width: ${({ percentage }) => `${percentage}%`};
  height: 100%;
  background: #9835d1;
  border-radius: 10px;

  transition: all 1s ease-in-out;
`;
