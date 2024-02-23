import React from 'react';

const GameStatus = ({ isXTurn, isWinner, isDraw }) => {
  const statusStyles = {
    color: isWinner ? 'green' : isDraw ? 'gray' : isXTurn ? 'blue' : 'red',
    fontSize: '2rem',
    transition: 'color 0.5s ease',
  };

  if (isWinner) {
    return <div style={statusStyles}>Player {isWinner} wins!</div>;
  }
  if (isDraw) {
    return <div style={statusStyles}>It's a draw!</div>;
  }
  return <div style={statusStyles}>Player {isXTurn ? 'X' : 'O'}'s turn</div>;
};

export default GameStatus;