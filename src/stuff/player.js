export default class Player {
  constructor(name) {
    this.name = name || "";
    this.point = 0;
    // this.isPlayerTurn = false;
  }
  setName(name) {
    this.name = name;
  }
  updatePoint(n) {
    this.point = n;
  }
  plusPoint(n) {
    this.point += n;
  }
}
