'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _connection = require('../connection');

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = _express2.default.Router();

router.route('/').get(find_all);

function find_all(req, res, next) {
  var _this = this;

  _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var sql, _ref2, rows;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sql = 'SELECT * FROM inv.inventories';
            _context.next = 3;
            return _connection2.default.query(sql);

          case 3:
            _ref2 = _context.sent;
            rows = _ref2.rows;

            if (!(rows.length == 0)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt('return', res.status(404).json({ message: 'NOT FOUND!' }));

          case 9:
            return _context.abrupt('return', res.json(rows));

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }))().catch(function (err) {
    return setImmediate(function () {
      next(err);
    });
  });
}

module.exports = router;
//# sourceMappingURL=product.js.map