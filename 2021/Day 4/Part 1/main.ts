import InputConverter from "./input/inputConverter";
import ArrayCreator from "./input/arrayCreator";
import PlayBingo from "./input/PlayBingo";

let lowestDrawnToFinish: number = 999999999999;

const cleanArray = new InputConverter('./input1.txt').convertToString()
const drawn = new ArrayCreator(cleanArray).createDrawnArray();
const bingoCards = new ArrayCreator(cleanArray).createBingoCards();
const play = new PlayBingo(drawn, bingoCards, lowestDrawnToFinish);


console.log(play.play())