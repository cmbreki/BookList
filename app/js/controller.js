(function(){

angular.module('readingList').controller('ReadingListController',function(){

this.books=books;
this.genres=genres;
this.showForm = false;

});

/*
angular.module('readingList').controller('reviewFormController', function(){





}); */


var genres = [  'fantasy', 'fiction', 'folklore', 'romance' ,'classic','horror', 'history', 'legend', 'metafiction', 'mystery', 'mythology', 'non-fiction' ];

  var books = [
    {
      title: 'A Game of Thrones: A Song of Ice and Fire',
      author: 'George R.R. Martin',
      isbn: '0553593714',
      review: 'The most inventive and entertaining fantasy saga of our time—warrants one hell of an introduction. I loved this book!',
      rating: 4,
      genres: { 'non-fiction': false, 'fantasy': true, 'fiction':true }
    },{
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
      isbn: '0141441143',
      review: "If I could give this book 6 stars I would. It is not a quick read, but well worth your time. This is a beautiful story that will leave you Inspired, as you journey through janes trials, tribulations, and quest for love.",
      rating: 5,
      genres: { fiction: true , 'romance':true}
    },{
      title: 'Gates of Fire',
      author: 'Steven Pressfield',
      isbn: '0553580531',
      review: 'Awesome book!',
      rating: 4,
      genres: { fiction: true, history: true}
    },{
      title: 'Atonement',
      author: 'Ian McEwan',
      isbn: '038572179X',
      review: 'Atonement encompasses many different aspects of twentieth century life, offering drama, war, and resolution to appeal to as many readers as possible. I thought that the characters and plot were enjoyable. If you like The Book Thief, family crises, or World War II, I recommend this book.',
      rating: 4,
      genres: { 'fiction': true, romance: true }
    }
  ];








})();