import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 8px 8px 25px -5px rgba(0, 0, 0, 0.5);
`;

export const SuggestionItemList = styled.ul`
  background: white;
  scroll-behavior: smooth;
  width: 500px;
  position: absolute;
  max-height: 260px;
  margin-top: -4px;
  overflow-x: hidden;
  overflow-y: auto;
`;
