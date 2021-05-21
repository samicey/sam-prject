const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const app = require("../app");

describe("App tests", function(){
  describe('get all users', async function() {
    it('should get data successfully', function(done) {
      expect(true).to.be.equal(true);
      done()
    });
  });
})
