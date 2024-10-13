import { useState, useEffect } from 'react';
import shuffle from './utilities/shuffle';
import Card from './components/Cards';
import Header from './components/Header';
import useAppBadge from './hooks/useAppBadge';

function App() {

  const [cards, setCards] = useState(shuffle);
  const [pickOne, setPickOne] = useState(null);
  const [pickTwo, setPickTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [wins, setWins] = useState(0);
  const [setBadge, clearBadge] = useAppBadge();

  //  Handle card selection
  const handleClick = (card) => {
    if (!disabled && card !== pickOne) {
      pickOne ? setPickTwo(card) : setPickOne(card);  
    }
  };

  const andleTurn = () => {
    //  Reset State
    setPickOne(null);
    setPickTwo(null);
    setDisabled(false);
  };

  const handleNewGame = () => {
    clearBadge();
    handleTurn();
    setCards(shuffle);
  }

  useEffect(() => {
    let pickTimer;

    // Two cards have been clicked
    if (pickOne && pickTwo) {
      //  Cards clicked are the same
      if (pickOne.image === pickTwo.image) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === pickOne.image) {
              // Update matched property
              return { ...card, matched: true };
            } else {
              //  No match
              return card;
            }
          });
        });
        handleTurn();
      } else {
        //  Prevent new selections until after delay
        setDisabled(true);
        //  Add delay between selections
        pickTimer = setTimeout(() => {
          handleTurn();
        }, 1000);
      }
    }

    return () => {
      clearTimeout(pickTimer);
    };

  }, [cards, pickOne, pickTwo]);

  useEffect(() => {
    const unmatched = cards.filter((card) => (!card.matched));

    if (cards.length && unmatched.length < 1) {
      setWins(wins + 1);
      handleTurn();
      setBadge();
      setCards(shuffle);
    }
  }, [cards, wins, setBadge]);

  return (
    <>
      <Header handleNewGame={handleNewGame} wins={wins} />

      <div className="grid">
        {cards.map((card) => {
          const { id, image, matched } = card;

          return (
            <Card
              key={id}
              image={image}
              selected={matched || pickOne === card || pickTwo === card}
              onClick={() => handleClick(card)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App