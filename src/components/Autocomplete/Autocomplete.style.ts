import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  border-radius: 4px;
  overflow: hidden;
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
