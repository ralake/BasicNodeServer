describe('homepage', function() {

	beforeEach(function() {
		casper.start('http://localhost:3000/');
	});

	it('hello worlds', function() {
		casper.then(function() {
		expect('body').to.contain.text("First Page!");
		});
	});

	it('has a button that goes to a new page', function() {
		casper.then(function() {
			this.click('input[value="button"]', function() {
				expect('body').to.contain.text("Next Page!");
			});
		});
	});

});
	