var BlackShadow = (function() {
    function BlackShadow(level) {
        Unit.call(this, 100, 200, level);
    }
  
    BlackShadow.prototype = Object.create(Unit.prototype);
    BlackShadow.prototype.constructor = BlackShadow;
  
    return BlackShadow;
  })();