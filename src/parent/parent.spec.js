
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
        });
        it('Shouldn\'t create a parent with duplicated nit', function(done){
            chai.request(app)
            .post('/parent')
            .send(fixtures.post.parentDuplicatedNit)
            .end(function(err, res){
                should.exist(err);
                expect(res).to.have.status(422)
                done();
            })
        });
        it('Shouldn\'t create a parent with more than 60 years', function(done){
            chai.request(app)
            .post('/parent')
            .send(fixtures.post.overaged)
            .end(function(err, res){
                should.exist(err);
                expect(res).to.have.status(422);
                done();
            })
        })
    })    
}) 