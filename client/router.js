Router.configure({
  layoutTemplate:'layout'
});

// Routes for all of the links and pages
Router.map(function(){
  this.route('home',{path:'/'});
  this.route('projects',{path:'/projects'});
  this.route('contact',{path:'/contact'});
  this.route('resume',{path:'/resume'});
});
