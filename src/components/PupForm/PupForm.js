// import { useState } from 'react';
// import banana from '../../pups/banana-pup.jpg';
// import sleepy from '../../pups/sleepy-pup.jpg';
// import speedy from '../../pups/speedy-pup.jpg';

// function PupForm() {
//   const [selectedPup, setSelectedPup] = useState('select');

//   const onSubmit = (e) => {
//     e.preventDefault();
//   }

//   return (
//     <form onSubmit={onSubmit}>
//       <select
//         name="pup"
//         onChange={e => setSelectedPup(e.target.value)}
//         value={selectedPup}
//       >
//         <option value="select" disabled>Select a pup!</option>
//         <option value={speedy}>Speedy Pup</option>
//         <option value={banana}>Banana Pup</option>
//         <option value={sleepy}>Sleepy Pup</option>
//       </select>
//       <button>
//         Submit
//       </button>
//     </form>
//   );
// }

// export default PupForm;


import { useState } from 'react';
import banana from '../../pups/banana-pup.jpg';
import sleepy from '../../pups/sleepy-pup.jpg';
import speedy from '../../pups/speedy-pup.jpg';
import { useContext } from 'react';
import { PupContext, usePuppyType } from '../../context/PupContext';

const PupForm = () => {
  const { puppyType, setPuppyType } = usePuppyType();
  const [selectedPup, setSelectedPup] = useState(puppyType);

  const onSubmit = (e) => {
    e.preventDefault();
    setPuppyType(selectedPup);
  }

  return (
    <form onSubmit={onSubmit}>
      <select
        name="pup"
        onChange={(e => setSelectedPup(e.target.value))}
        value={selectedPup}
      >
        <option value="select" disabled>Select a pup!</option>
        <option value={speedy}>Speedy Pup</option>
        <option value={banana}>Banana Pup</option>
        <option value={sleepy}>Sleepy Pup</option>
      </select>
      <button>
        Submit
      </button>
    </form >
  );
}

export default PupForm;