var bg = new BattleGround(document.getElementById('wrapper'), 30, 15);

bg.fill([Dragon, CrocoTurtle, Monkey, Snake, MonsterBear]);
bg.addCharacter(new Character());

var cellsList = document.querySelectorAll('.game__cell');
console.log(cellsList);

var cell = document.querySelector('.game__cell');
console.log(cell);

cell.addEventListener('click', function(e) {
    console.log('+');
});

cellsList.forEach(function(el, i) {
    el.addEventListener('click', function(e) {
        console.log('clicked', el, i);
    })
})
