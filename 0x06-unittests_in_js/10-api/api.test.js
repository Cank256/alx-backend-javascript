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
      done();
    });
  });

  it.skip('Correct response when :id is a number?', (done) => {
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

describe('POST /login endpoint', () => {
  it('should return the welcome message with the username provided in the request body', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: true,
      body: {
        userName: 'Betty'
      }
    };

    request.post(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('GET /available_payments endpoint', () => {
  it('should return an object with payment methods', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});
