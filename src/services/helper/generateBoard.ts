import { FIVE, SEVEN, ZERO } from '../../constants/numbers';
import { Board } from '../../types';

const generateBoard: Board = () => {
  const board = Array(FIVE).fill(Array(SEVEN).fill(ZERO));
  return board;
};

export default generateBoard;
