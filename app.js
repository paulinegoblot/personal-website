(function(){
	
	var app = angular.module('app', []);
  
	app.controller('PageController', function (){
		this.currentPage = 0;
		this.isNavOpen = false;
		
        this.showPage = (page) => {
          this.currentPage = page;
        };
        this.isCurrent = (page) => {
          return this.currentPage === page;
        };
		this.toogleNav = () => {
			this.isNavOpen = ! this.isNavOpen;
		};
	});
})();