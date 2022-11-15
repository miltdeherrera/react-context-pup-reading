import { usePuppyType } from '../../context/PupContext';

const PupImage = () => {
  const { puppyType } = usePuppyType();
  console.log(puppyType)

  return (
    <img src={puppyType} alt="pup" />
  );
};

export default PupImage;