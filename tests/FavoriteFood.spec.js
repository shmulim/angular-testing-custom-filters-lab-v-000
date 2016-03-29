describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should filter the favorite food', function(){
    var mockedList = [{
      name: 'joe',
      favoriteFood: 'hot dogs'
    },
    { 
      name: 'bill',
      favoriteFood: 'burgers'
    }];

    var results = $filter('favoriteFood')(mockedList, 'burgers');

    expect(results[0].name).toBe('bill');

  });

	
});
