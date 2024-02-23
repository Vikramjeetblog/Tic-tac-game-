import React, { useState } from 'react';
import Square from './Square';
import GameStatus from './GameStatus';

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winner) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return null;
  };

  const isWinner = checkWinner();
  const isDraw = state.every((cell) => cell !== null) && !isWinner;

  const handleClick = (index) => {
    const copyState = [...state];
    if (state[index] || isWinner) return;
    copyState[index] = isXTurn ? 'x' : 'o';
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  return (
    <div className='Board-container'>
      <GameStatus isXTurn={isXTurn} isWinner={isWinner} isDraw={isDraw} />
      <div className='Board-row'>
        <Square onClick={() => handleClick(0)} value={state[0]} />
        <Square onClick={() => handleClick(1)} value={state[1]} />
        <Square onClick={() => handleClick(2)} value={state[2]} />
      </div>
      <div className='Board-row'>
        <Square onClick={() => handleClick(3)} value={state[3]} />
        <Square onClick={() => handleClick(4)} value={state[4]} />
        <Square onClick={() => handleClick(5)} value={state[5]} />
      </div>
      <div className='Board-row'>
        <Square onClick={() => handleClick(6)} value={state[6]} />
        <Square onClick={() => handleClick(7)} value={state[7]} />
        <Square onClick={() => handleClick(8)} value={state[8]} />
      </div>
      <button className='Reset' onClick={() => setState(Array(9).fill(null))}>Reset</button>
    </div>
  );
};

export default Board;