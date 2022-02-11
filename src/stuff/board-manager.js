const TILES = [
  { shape: 1, figureColor: 1, bgColor: 1 },
  { shape: 1, figureColor: 1, bgColor: 2 },
  { shape: 1, figureColor: 1, bgColor: 3 },
  { shape: 1, figureColor: 2, bgColor: 1 },
  { shape: 1, figureColor: 2, bgColor: 2 },
  { shape: 1, figureColor: 2, bgColor: 3 },
  { shape: 1, figureColor: 3, bgColor: 1 },
  { shape: 1, figureColor: 3, bgColor: 2 },
  { shape: 1, figureColor: 3, bgColor: 3 },
  { shape: 2, figureColor: 1, bgColor: 1 },
  { shape: 2, figureColor: 1, bgColor: 2 },
  { shape: 2, figureColor: 1, bgColor: 3 },
  { shape: 2, figureColor: 2, bgColor: 1 },
  { shape: 2, figureColor: 2, bgColor: 2 },
  { shape: 2, figureColor: 2, bgColor: 3 },
  { shape: 2, figureColor: 3, bgColor: 1 },
  { shape: 2, figureColor: 3, bgColor: 2 },
  { shape: 2, figureColor: 3, bgColor: 3 },
  { shape: 3, figureColor: 1, bgColor: 1 },
  { shape: 3, figureColor: 1, bgColor: 2 },
  { shape: 3, figureColor: 1, bgColor: 3 },
  { shape: 3, figureColor: 2, bgColor: 1 },
  { shape: 3, figureColor: 2, bgColor: 2 },
  { shape: 3, figureColor: 2, bgColor: 3 },
  { shape: 3, figureColor: 3, bgColor: 1 },
  { shape: 3, figureColor: 3, bgColor: 2 },
  { shape: 3, figureColor: 3, bgColor: 3 },
];

const TUTORIAL_TILES = [
  { shape: 1, figureColor: 2, bgColor: 1 },
  { shape: 1, figureColor: 2, bgColor: 2 },
  { shape: 1, figureColor: 3, bgColor: 3 },
  { shape: 2, figureColor: 1, bgColor: 2 },
  { shape: 2, figureColor: 2, bgColor: 2 },
  { shape: 2, figureColor: 3, bgColor: 3 },
  { shape: 3, figureColor: 3, bgColor: 1 },
  { shape: 1, figureColor: 1, bgColor: 2 },
  { shape: 3, figureColor: 2, bgColor: 1 },
];

const isMultiple3 = (num) => {
  return num % 3 === 0;
};

export default class BoardManager {
  constructor(isTutorial) {
    do {
      this.tiles = isTutorial ? TUTORIAL_TILES : this.generateBoard();
      this.answers = this.generateAnswers();
    } while (this.answers.length > 12);
    this.remainingAnswers = [...this.answers];
    this.currentAnswers = [];
  }
  generateBoard() {
    const tileIndices = [];
    for (let i = 0; i < 9; i++) {
      const num = Math.floor(Math.random() * 27);
      if (tileIndices.includes(num)) i -= 1;
      else tileIndices.push(num);
    }
    return tileIndices.map((index) => TILES[index]);
  }
  generateAnswers() {
    const arr = [];
    for (let i = 1; i <= 9; i++) {
      for (let j = i + 1; j <= 9; j++) {
        for (let k = j + 1; k <= 9; k++) {
          const {
            shape: shape1,
            figureColor: figure1,
            bgColor: bg1,
          } = this.tiles[i - 1];
          const {
            shape: shape2,
            figureColor: figure2,
            bgColor: bg2,
          } = this.tiles[j - 1];
          const {
            shape: shape3,
            figureColor: figure3,
            bgColor: bg3,
          } = this.tiles[k - 1];
          const isShapeHap = isMultiple3(shape1 + shape2 + shape3);
          if (!isShapeHap) continue;
          const isFigureColorHap = isMultiple3(figure1 + figure2 + figure3);
          if (!isFigureColorHap) continue;
          const isBgColoreHap = isMultiple3(bg1 + bg2 + bg3);
          if (!isBgColoreHap) continue;

          arr.push("" + i + j + k);
        }
      }
    }
    arr.push("0");
    return arr;
  }
  checkHap(hap) {
    if (this.remainingAnswers.length <= 1) return false;

    const sorted = hap.split("").sort().join("");
    const idx = this.remainingAnswers.findIndex(sorted);
    if (idx > -1) {
      this.remainingAnswers.splice(idx, 1);
      this.currentAnswers.push(sorted);
      return true;
    } else return false;
  }
  checkKyeol() {
    if (
      this.remainingAnswers.length === 1 &&
      this.remainingAnswers[0] === "0"
    ) {
      this.remainingAnswers.splice(0, 1);
      this.currentAnswers.push("결");
      return true;
    } else return false;
  }
}
