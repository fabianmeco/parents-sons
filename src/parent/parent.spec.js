
const parentModel = require('./parent.model');
const fixtures = require('./parent.fixtures');

describe('Parent', function(){
    before(function () {
       parentModel.deleteAll().then()
    });
    describe('[POST] /parent', function(){
        it('Should create a new parent correctly', function(done){
            chai.request(app)
            .post('/parent')
            .send(fixtures.post.parentRight)
            .end(function(err, res){
                should.not.exist(err);                
                done();
            })
        })
    })    
}) 