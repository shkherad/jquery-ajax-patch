'use strict';

const libraryApi = require('./library-api');
// don't rely on console displays for real apps! we would normally manipulate
// the content on the page with a success function.
//
// for our application, we'd probably call it "displayBooks"
// or something similar.
const onSuccess = function (data) {
  if (data.book) {
    console.log(data.book);
  } else {
    console.table(data.books);
  }
};

const onError = function (response) {
  console.error(response);
};

const onDelete = function () {
  console.log('Book was successfully deleted.');
};

const onUpdate = function() {
  console.log('Book was successfully updated!')
}

const onSuccessUserDestroy = function(bookId){
  $('#deleteForm'+bookId).remove();
  console.log('Destroy book'+bookId)
}

const userDestroy = function(event){
  event.preventDefault();
  let bookId = $(this).val();
  console.log(bookId)
  libraryApi.destroy(bookId)
  .done(onSuccessUserDestroy(bookId))
  .fail(onError);
};

const displayAll = function(data) {
  console.log('displaying all');
  console.log(data.books[6].id)
  for(let i=0;i<data.books.length;i++){
    let bookId = data.books[i].id;
    let bookTitle = data.books[i].title;
    let bookAuthor = data.books[i].author;
    $('#book-list').append("<div id='deleteForm"+data.books[i].id+"'><li>Book Id:"+bookId+" Title:"+bookTitle+" Author:"+bookAuthor+"</li><button class='deleteButton' id='book"+data.books[i].id+"' type='submit' value="+bookId+">Delete</button></div>");
    $('#book'+i).on('click', userDestroy);
}
};


module.exports = {
  onSuccess,
  onError,
  onDelete,
  onUpdate,
  displayAll,
  userDestroy,
  onSuccessUserDestroy
};
