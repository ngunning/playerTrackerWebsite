var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('impacts',{title: 'Player Impacts'});

  let sql = 'SELECT * FROM playerImpacts';
  let query = db.query(sql,(err,results) => {
      if(err) throw err;
      console.log(results);
  });

});

module.exports = router;
