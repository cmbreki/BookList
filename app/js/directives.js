(function(){


angular.module('readingList').directive('bookGenres',function(){
	return {
	  restrict: 'E',
      templateUrl: 'partials/book-genres.html',

	}

});


angular.module('readingList').directive('bookCover', function(){
	return {
		restrict:'E',
		templateUrl:'partials/book-covers.html',
		replace:true
	}

});



})();