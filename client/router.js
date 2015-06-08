Router.configure({
	layoutTemplate:'layout'
});

Router.map(function(){
	this.route('currentRev', {path:'/'});
	this.route('employeeCost', {path:'/employeeCost'});
	this.route('status', {path:'/status'});
	this.route('misc', {path:'/misc'});

})
