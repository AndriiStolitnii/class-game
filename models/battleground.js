var BattleGround = (function() {
  function BattleGround(element, size, amountOfMonsters) {
    this.wrapperElement = null;
    this.cellsElement = null;
    this.controllsElement = null;
    this.element = element;
    this.size = size;
    this.amountOfMonsters = amountOfMonsters || size / 2;
    this.area = new Array(size).fill(1).map(function() {
      return new Grass();
    });
    this.render();
  }

  BattleGround.prototype.fill = function(monstersArr) {
    var self = this;
    Array(this.amountOfMonsters)
      .fill(1)
      .forEach(function() {
        self.area[random(1, self.area.length)] = new monstersArr[
          random(0, monstersArr.length)
        ](random(1, 3));
      });
  };

  BattleGround.prototype.addCharacter = function(character) {
    this.area[0] = character;
  };

  BattleGround.prototype.render = function() {
    var el = document.createElement('div');
    el.classList.add('game__wrapper');
    var cellsElement = document.createElement('div');
    cellsElement.classList.add('game__cells');
    var controllsElement = document.createElement('div');
    controllsElement.classList.add('game__controls');
    el.appendChild(cellsElement);
    el.appendChild(controllsElement);
    for (let index = 0; index < this.size; index++) {
      var cell = document.createElement('div');
      cell.classList.add('game__cell');
      cellsElement.appendChild(cell);
    }
    this.element.appendChild(el);
  };

  BattleGround.prototype.update = function() {
    var self = this;
    this.cellsElement.innerHTML = '';
    this.area.forEach(function(el) {
      var cell = document.createElement('div');
      var cellElement = el.render();

      cell.classList.add('game__cells__item');
      cell.appendChild(cellElement);
      self.cellsElement.appendChild(cell);
    });
  };

  return BattleGround;
})();
