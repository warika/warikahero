import express from 'express'
import pool from '../connection'
var router = express.Router()

router.route('/')
  .get(find_all)
  .post(add_data)

router.route('/:id')
  .get(find_by_id)
  .delete(delete_by_id)
  .put(update_by_id)

async function update_by_id(req, res, next){
  try {
    let id = req.params.id
    let customer = req.body
    console.log(customer);
    var sql = `UPDATE "customers" SET (name, address, province, officeno, mobileno, contactperson, contactno, website, location, type, remark, district)
               = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) WHERE id = $13`;
     await pool.query(sql, [
     customer.name,
     customer.address,
     customer.province,
     customer.officeno,
     customer.mobileno,
     customer.contactperson,
     customer.contactno,
     customer.website,
     customer.location,
     customer.type,
     customer.remark,
     customer.district,
     id
   ])
   res.json({ message: 'แก้ไขสำเร็จ' })
 } catch (err) {
   setImmediate(() => { next(err) })
 }
}
async function delete_by_id(req, res, next){
  try {
    let id = req.params.id
    var sql = `DELETE FROM "customers" WHERE id = $1`;
    await pool.query(sql, [ req.params.id ])
    res.json({message: 'yes'})
  } catch (err) {
    setImmediate(() => { next(err) })
  }
}
async function find_all(req, res, next){
  try {
    var sql = `SELECT * FROM "customers" ORDER BY id DESC`;
    const { rows } = await pool.query(sql)
    if(rows.length == 0) return res.status(404).json({message: 'NOT FOUND!'})
    else return res.json(rows)
  } catch (err) {
    setImmediate(() => { next(err) })
  }
}
async function find_by_id(req, res, next){
  try {
    let id = req.params.id
    var sql = `SELECT * FROM "customers" WHERE id = $1`;
    const { rows } = await pool.query(sql, [id])
    if(rows.length == 0) return res.status(404).json({message: 'NOT FOUND!'})
    else return res.json(rows[0])
  } catch (err) {
    setImmediate(() => { next(err) })
  }
}
async function add_data(req, res, next){
  try {
    var customer = req.body
    console.log(customer);
    var sql = `INSERT INTO "customers" (name, address, province, officeno, mobileno, contactperson, contactno, website, location, type, remark, district)
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
    await pool.query(sql, [ customer.name, customer.address, customer.province, customer.officeno, customer.mobileno, customer.contactperson, customer.contactno, customer.website, customer.location, customer.type, customer.remark, customer.district])
    res.json({message: 'yes'})
  } catch (err) {
    setImmediate(() => { next(err) })
  }
}

module.exports = router
