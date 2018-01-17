
const fixtures = require('./parent.fixtures');

describe('Parent', function(){
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