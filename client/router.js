Router.configure({
	layoutTemplate:'layout',
	yieldTemplates: {
		'metrics': {to: 'metrics'},
		'sidebar': {to: 'sidebar'}
	}
});

Router.map(function(){
	this.route('currentRev', {path:'/'});
	this.route('employeeCost', {path:'/employeeCost'});
	this.route('status', {path:'/status'});
	this.route('misc', {path:'/misc'});
	this.route('settings', {path: '/settings', layoutTemplate: 'settings'});

})
