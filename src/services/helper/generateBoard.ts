import { Board } from '../../types';

const generateBoard: Board = () => {
  const board = Array(5).fill(Array(7).fill(0));
  return board;
};

export default generateBoard;
