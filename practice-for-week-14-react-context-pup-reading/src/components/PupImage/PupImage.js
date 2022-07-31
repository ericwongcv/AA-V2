import speedy from '../../pups/speedy-pup.jpg';
import banana from '../../pups/banana-pup.jpg';
import sleepy from '../../pups/sleepy-pup.jpg';
// import { useContext } from 'react';
// import { PupContext } from '../../context/PupContext';
import { usePuppyType } from '../../context/PupContext';

const PupImage = () => {
  // const { puppyType, setPuppyType } = useContext(PupContext);
  const { puppyType, setPuppyType } = usePuppyType();

  return (
    <img src={puppyType} alt="pup" />
  );
};

export default PupImage;
