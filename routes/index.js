var express = require('express');
var router = express.Router();
var clusterName = 'Unknown Cluster'

/* GET home page. */
router.get('/', function(req, res, next) {
  if (process.env.CLUSTER_NAME) {
    clusterName = process.env.CLUSTER_NAME;
  }

  res.render('index', { title: 'Red Hat Tech Exchange', clusterName });
});

module.exports = router;
