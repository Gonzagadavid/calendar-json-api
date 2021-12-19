import { UpperCase } from '../../types';

const toFirstUpperCase:UpperCase = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;

export default toFirstUpperCase;
