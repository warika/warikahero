'use strict';

var update_by_id = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var id, customer, sql;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = req.params.id;
            customer = req.body;
            sql = 'UPDATE "customers" SET (name, address, province, officeno, mobileno, contactperson, contactno, website, location, type, remark)\n               = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) WHERE id = $12';
            _context.next = 6;
            return _connection2.default.query(sql, [customer.name, customer.address, customer.province, customer.officeno, customer.mobileno, customer.contactperson, customer.contactno, customer.website, customer.location, customer.type, customer.remark, id]);

          case 6:
            res.json({ message: 'แก้ไขสำเร็จ' });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](0);

            setImmediate(function () {
              next(_context.t0);
            });

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 9]]);
  }));

  return function update_by_id(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var delete_by_id = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var id, sql;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            sql = 'DELETE FROM "customers" WHERE id = $1';
            _context2.next = 5;
            return _connection2.default.query(sql, [req.params.id]);

          case 5:
            res.json({ message: 'yes' });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](0);

            setImmediate(function () {
              next(_context2.t0);
            });

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 8]]);
  }));

  return function delete_by_id(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var find_all = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var sql, _ref4, rows;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            sql = 'SELECT * FROM "customers"';
            _context3.next = 4;
            return _connection2.default.query(sql);

          case 4:
            _ref4 = _context3.sent;
            rows = _ref4.rows;

            if (!(rows.length == 0)) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt('return', res.status(404).json({ message: 'NOT FOUND!' }));

          case 10:
            return _context3.abrupt('return', res.json(rows));

          case 11:
            _context3.next = 16;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3['catch'](0);

            setImmediate(function () {
              next(_context3.t0);
            });

          case 16:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 13]]);
  }));

  return function find_all(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

var find_by_id = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var id, sql, _ref6, rows;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            sql = 'SELECT * FROM "customers" WHERE id = $1';
            _context4.next = 5;
            return _connection2.default.query(sql, [id]);

          case 5:
            _ref6 = _context4.sent;
            rows = _ref6.rows;

            if (!(rows.length == 0)) {
              _context4.next = 11;
              break;
            }

            return _context4.abrupt('return', res.status(404).json({ message: 'NOT FOUND!' }));

          case 11:
            return _context4.abrupt('return', res.json(rows[0]));

          case 12:
            _context4.next = 17;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4['catch'](0);

            setImmediate(function () {
              next(_context4.t0);
            });

          case 17:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 14]]);
  }));

  return function find_by_id(_x10, _x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}();

var add_data = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var customer, sql;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            customer = req.body;

            console.log(customer);
            sql = 'INSERT INTO "customers" (name, address, province, officeno, mobileno, contactperson, contactno, website, location, type, remark)\n              VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
            _context5.next = 6;
            return _connection2.default.query(sql, [customer.name, customer.address, customer.province, customer.officeno, customer.mobileno, customer.contactperson, customer.contactno, customer.website, customer.location, customer.type, customer.remark]);

          case 6:
            res.json({ message: 'yes' });
            _context5.next = 12;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5['catch'](0);

            setImmediate(function () {
              next(_context5.t0);
            });

          case 12:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 9]]);
  }));

  return function add_data(_x13, _x14, _x15) {
    return _ref7.apply(this, arguments);
  };
}();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _connection = require('../connection');

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = _express2.default.Router();

router.route('/').get(find_all).post(add_data);

router.route('/:id').get(find_by_id).delete(delete_by_id).put(update_by_id);

module.exports = router;
//# sourceMappingURL=customer.js.map