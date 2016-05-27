'use strict';

const libraryApi = require('./library-api');
const ui = require('./ui');



// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

// const onUserDestroy = function(event){
//   event.preventDefault();
//   let bookId = $(this).val();
//   console.log(bookId)
//   libraryApi.destroy(bookId)
//   .done(ui.onSuccessUserDelete(bookId))
//   .fail(ui.onError)
// };

const onDisplayAll = function(event) {
  event.preventDefault();
  libraryApi.index()
  .done(ui.displayAll)
  .fail(ui.onError)
}


const onGetBooks = function (event) {
  event.preventDefault();
  let bookId = $('#book-id').val();

  if (bookId.length === 0) {
    libraryApi.index()
      .done(ui.onSuccess)
      .fail(ui.onError);
  } else {
    libraryApi.show(bookId)
      .done(ui.onSuccess)
      .fail(ui.onError);
  }
    $('#book-request').find('input').first().val('');
};

const onCreateBook = function (event) {
  event.preventDefault();
  libraryApi.create(event.target)
    .done(ui.onSuccess)
    .fail(ui.onError);
    $('#book-create').find('input').first().val('');
    $('#book-create').find('input:eq(1)').val('');
};

const onDeleteBook = function (event) {
  event.preventDefault();
  let bookId = $('#book-delete-id').val();
  libraryApi.destroy(bookId)
    .done(ui.onDelete)
    .fail(ui.onError);
    $('#book-delete').find('input').first().val('');
};

const onUpdateBook = function(event) {
    event.preventDefault();
    //let bookId = $('#book-update-id').val();
    console.log(event.target);
    libraryApi.update(event.target)
      .done(ui.onUpdate)
      .fail(ui.onError);
      $('#book-update').find('input').first().val('');
      $('#book-update').find('input:eq(1)').val('');
      $('#book-update').find('input:eq(2)').val('');
    }


// On document ready
$(() => {
  $('#book-request').on('submit', onGetBooks);
  $('#book-create').on('submit', onCreateBook);
  $('#book-delete').on('submit', onDeleteBook);
  $('#book-update').on('submit', onUpdateBook);
  $('#book-display').on('click', onDisplayAll);
});
