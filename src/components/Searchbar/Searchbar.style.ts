import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 1rem;
  position: relative;
`;

export const Input = styled.input<{
  $hasIcon?: boolean;
}>`
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  width: 100%;

  ${(props) => props.$hasIcon && 'padding-left: 2.1rem'};
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 25px;
  opacity: 0.3;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: '';
    width: 1px;
    height: 100%;
    position: absolute;
    background-color: black;
    right: -4px;
  }
`;

export const Spinner = styled.div`
  width: 1rem;
  height: 1rem;
  border: 2px dashed #708090;
  border-radius: 100%;
  animation: spin 1s linear infinite;
  position: absolute;
  right: 25px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
