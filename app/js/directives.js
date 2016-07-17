(function(){


angular.module('readingList').directive('bookGenres',function(){
	return {
	  restrict: 'E',
      templateUrl: 'partials/book-genres.html',
      scope: {
      	genres:'='
      }

	}

});


angular.module('readingList').directive('bookCover', function(){
	return {
		restrict:'E',
		templateUrl:'partials/book-covers.html',
		replace:true,
	}

})

angular.module('readingList').directive('reviewForm', function(){
	return {
		restrict:'E',
		templateUrl:'partials/review-form.html',
		replace:true,
		scope: {
			books: '=',
        	genres: '='
		},
		
		controller:function(){

		
			this.book = {genres:{}};
            

			this.addReview = function(form){

			 	books.push(this.book);
				this.book = {genres:{}};

				form.$setPristine();
			}
		},
		controllerAs:'reviewFormController'
		
	}

});


})();