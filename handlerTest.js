var expect  = require('chai').expect;
var myFunction = require('./handler.js');
var eventData = require('./eventData.json')


    describe ('Handler Test', function() {
        it('Hello function', function(done){
           
            myFunction.hello(eventData, null, (temp, data) => {
                expect(data.statusCode).to.be.eql(200);
                done();
              });
        });

    });

    