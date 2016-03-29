describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

  beforeEach(inject(function ($filter) {
    removeAllVowels = $filter('removeAllVowels');
  }));

  it('removes all vowels', function(){
    expect(removeAllVowels('spec')).toBe('spc');
  });

});