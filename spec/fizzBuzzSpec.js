describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 15', function() {
      // javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });

    it('not divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(17)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it(' not divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(7)).toBe(false);
    });

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('not divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(7)).toBe(false);
    });

  });

    describe('when playing the game', function() {

      it('returns Javabuzz', function() {
        expect(javabuzz.play(30)).toEqual ('Javabuzz')
      });

      it('returns Java', function() {
        expect(javabuzz.play(3)).toEqual ('Java')
      });

      it('returns Buzz', function() {
        expect(javabuzz.play(5)).toEqual ('Buzz')
      });
      it('returns the number', function() {
        expect(javabuzz.play(7)).toEqual (7)
      });
    });
});
