import { SEVEN, SIX, ZERO } from '../../constants/numbers';
import { Board } from '../../types';

const generateBoard: Board = () => {
  const board = Array(SIX).fill(Array(SEVEN).fill(ZERO));
  return board;
};

export default generateBoard;
