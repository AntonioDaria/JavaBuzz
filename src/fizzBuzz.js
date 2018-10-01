var Javabuzz = function(){};
var javabuzz = new Javabuzz();

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype.isDivisibleByFifteen = function (number) {
  return this._isDivisibleBy(number, 15);

};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.play = function(number) {
  if (this.isDivisibleByFifteen(number)){
    return('Javabuzz');
  }
  if (this.isDivisibleByFive(number)){
    return('Buzz');
  }
  if (this.isDivisibleByThree(number)){
    return('Java');
  }
    return (number);

    for(var i = 1; i<= 100; i++) {
      console.log(javabuzz.play(i));
    }

};
