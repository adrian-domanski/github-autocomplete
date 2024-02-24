import { HiUser } from 'react-icons/hi';
import * as Styled from './SuggestionItem.style';
import { RiGitRepositoryFill } from 'react-icons/ri';
import type { SearchOptionType } from '../../Autocomplete.types';

interface Props extends React.LiHTMLAttributes<HTMLLIElement> {
  name: string;
  type: SearchOptionType;
  isActive?: boolean;
}

const SuggestionItem = ({ type, name, isActive = false, ...props }: Props) => {
  return (
    <Styled.ListItem $isActive={isActive} {...props}>
      <Styled.Content>
        {type === 'Profile' ? <HiUser /> : <RiGitRepositoryFill />}
        <Styled.Label>{name}</Styled.Label>
      </Styled.Content>
    </Styled.ListItem>
  );
};

export default SuggestionItem;
