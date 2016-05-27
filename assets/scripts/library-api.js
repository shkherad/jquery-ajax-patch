'use strict';

const app = require('./app');
const getFormFields = require('../../lib/get-form-fields');

const index = function () {
  return $.ajax({
    url: app.host + '/books',
    method: 'GET',
  });
};

const show = function (bookId) {
  return $.ajax({
    url: app.host + '/books/' + bookId,
    method: 'GET',
  });
};

const create = function (form) {
  return $.ajax({
    url: app.host + '/books/',
    method: 'POST',
    data: getFormFields(form),
  });
};

const destroy = function (bookId) {
  return $.ajax({
    url: app.host + '/books/' + bookId,
    method: 'DELETE',
  });
};

const update = function (form) {
  let data = getFormFields(form);
  console.log(data);
  return $.ajax({
    url: app.host + '/books/' + data.book.id,
    method: 'PATCH',
    data:data,
  })
}

const getAll = function () {
  return $.ajax({
    url: app.host + '/books',
    method: 'GET',
  });
};

module.exports = {
  index,
  show,
  create,
  destroy,
  update,
  getAll,
};
