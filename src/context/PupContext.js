import { createContext, useState, useContext } from 'react';

// other two in case switching becomes necessary :)
import speedy from '../pups/speedy-pup.jpg';
import banana from '../pups/banana-pup.jpg';
import sleepy from '../pups/sleepy-pup.jpg';

export const PupContext = createContext();

export const PupProvider = (props) => {
  const [puppyType, setPuppyType] = useState(banana);

  return (
    <PupContext.Provider
      value={{
        puppyType, setPuppyType
      }}>
      {props.children}
    </PupContext.Provider>
  );
};

export const usePuppyType = () => {
  return useContext(PupContext);
};