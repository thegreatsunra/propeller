
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.locals.title = 'Express Prototyper Home';
  res.locals.slug = 'home';
  // res.locals.context = context; // defined in models/index.js
  res.render('home');
};

/*
 * GET all other views
 */

exports.views = function (req, res){
  var requestedView = req.params.view.replace('.html', '');
  res.locals.title = requestedView;
  res.locals.slug = requestedView;
  // res.locals.context = context; // defined in models/index.js
  res.render(requestedView);
}
