import styled from 'styled-components';

export const ListItem = styled.li<{
  $isActive?: boolean;
}>`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 4px;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  background: ${(props) => (props.$isActive ? '#e1e1e1' : 'transparent')};

  &:hover {
    background: #e1e1e1;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.div`
  margin-left: 1rem;
`;
