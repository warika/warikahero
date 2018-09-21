import express from 'express'
import pool from '../connection'
var router = express.Router()

router.route('/province')
  .get(find_all)

function find_all(req, res, next){
  (async () => {
    var sql = `SELECT * FROM thailand.provinces`;
    const { rows } = await pool.query(sql)
    if(rows.length == 0) return res.status(404).json({message: 'NOT FOUND!'})
    else return res.json(rows)
  })().catch(err => setImmediate(() => { next(err) }))
}


module.exports = router
