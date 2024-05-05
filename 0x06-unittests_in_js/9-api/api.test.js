const request = require('request');
const { expect } = require('chai');

describe('Index page', function() {
  it('should return correct status code', function(done) {
      request.get('http://localhost:7865', (error, response, body) => {
          expect(response.statusCode).to.equal(200);
          done();
      });
  });

  it('should return correct result', function(done) {
      request.get('http://localhost:7865', (error, response, body) => {
          expect(body).to.equal('Welcome to the payment system');
          done();
      });
  });
});

describe('Cart page', () => {
  it('Correct status code when :id is a number?', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart :id');
      done();
    });
  });

  it('Correct response when :id is a number?', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart :id');
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
