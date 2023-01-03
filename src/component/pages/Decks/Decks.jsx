// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useLogin } from '../../../context/loginProvider';
// import Deck from './Deck/Deck';
// import './Decks.scss'

// const Decks = () => {
//   const { user: {id} } = useLogin();
//   const [decks, setDecks] = useState([]);
//   const getDeck = () => {
//     axios.get(`http://localhost:8000/api/deck/${id}`).then((response) => {
//       setDecks(response.data);
//     });
//   };

//   useEffect(() => {
//     getDeck();
//   }, []);

//   return (
//     <div className='grid_deck'>
//       {decks.map((deck) => (
//         <div className='deck'>
//           <Deck deckName={deck.namedeck} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Decks;
