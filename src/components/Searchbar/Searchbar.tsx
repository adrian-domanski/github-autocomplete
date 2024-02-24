import * as Styled from './Searchbar.style';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  isLoading?: boolean;
}

const Searchbar = ({ isLoading, icon, ...props }: Props) => {
  return (
    <Styled.Wrapper>
      {icon && <Styled.IconWrapper>{icon}</Styled.IconWrapper>}
      <Styled.Input $hasIcon={!!icon} placeholder='Search...' {...props} />
      {isLoading && <Styled.Spinner aria-label='loading...' />}
    </Styled.Wrapper>
  );
};

export default Searchbar;
