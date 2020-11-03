var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var plus = '';
    var minus = '';
    var divide = '';
    var multiply = '';
    res.render('default', { plus, minus, divide, multiply });
});

router.post('/', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    var ans = req.body.ans;
    const calc = req.body.calculation;
    var plus = '';
    var minus = '';
    var divide = '';
    var multiply = '';
    console.log(req.body);

    switch (calc) {
        case "plus":
            ans = Number(a) + Number(b);
            plus = 'checked=\'true\'';
            break;
        case "minus":
            ans = Number(a) - Number(b);
            minus = 'checked=\'true\'';
            break;
        case "multiply":
            ans = Number(a) * Number(b);
            multiply = 'checked=\'true\'';
            break;
        case "divide":
            ans = Number(a) / Number(b);
            divide = 'checked=\'true\'';
            break;
        default:
            ans.value = "0000000";
            break;
    }

    res.render('default', { a, b, ans, plus, minus, divide, multiply });
});

module.exports = router;