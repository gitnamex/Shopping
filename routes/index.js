var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  product=[
    {
      name:"I Phone",
      category:"Mobile",
      description:"This is Good Phone",
      image:"https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
      name:"Redmi 10",
      category:"Mobile",
      description:"King of Smart Phone",
      image:"https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    }

  ]
  res.render('index', { title: 'Shopping cart',product,admin:false });
});

module.exports = router;
