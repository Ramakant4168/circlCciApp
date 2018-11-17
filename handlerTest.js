import { expect }  from 'chai';
import * as  myFunction  from './handler.js';
import * as eventData from './eventData.json';

console.log('---',myFunction);
describe ('Handler Test', function() {
    it('Hello function', function(done){
        
    myFunction.hello(eventData, null, (temp, data) => {
        expect(data.statusCode).to.be.eql(200);
        done();
        });
    });

});

    