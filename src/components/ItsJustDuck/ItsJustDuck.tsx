import duckImg from '../../assets/duck.png';
import * as Styled from './ItsJustDuck.style';

const ItsJustDuck = () => {
  return (
    <Styled.Duck
      onClick={() => alert('just a duck')}
      alt='detective duck, helps with debugging'
      src={duckImg}
    />
  );
};

export default ItsJustDuck;
