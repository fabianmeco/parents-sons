module.exports = require('knex')({
    client: 'pg',
    connection: 'postgres://cqwdfdcp:eLbYiNuzLLcAhVq7uz2Rx9kFCGpPIDiT@baasu.db.elephantsql.com:5432/cqwdfdcp',
    searchPath:'public',
    pool:{
      min:2,
      max:10
    }
})