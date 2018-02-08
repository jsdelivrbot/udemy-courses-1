$(document).ready(function() {
  /* Fetch list */

  $.getJSON('/api/todos')
    .then(addTodos)
    .catch(function(err) {
      console.log(err);
    })

  /* New todo */

  $('#todoInput').keypress(function(e) {
    if (e.which === 13) {
      createTodo();
    }
  });

  /* Todo completed - update ui */

  $('.list').on('click', 'li', function() {
    updateTodo($(this));
  })

  /* Delete todo */

  $('.list').on('click', 'span', function(e) { // .list is available when page loads, the AJAX takes some time to complete. The second argument tells jquery to listen for spans inside of a list
    e.stopPropagation();
    removeTodo($(this).parent());
  });
});

/* Add all todos to page */

function addTodos(todos) {
  // add todos to page here
  todos.forEach(function(todo) {
    addTodo(todo);
  });
}

/* Add one todo */

function addTodo(todo) {
  const newTodo = $('<li class="task">' + todo.name + ' <span>X</span></li>');
  newTodo.data('id', todo._id);
  newTodo.data('completed', todo.completed)

  if (todo.completed) {
    newTodo.addClass("done");
  }

  $('.list').append(newTodo);
}

/* Print erros to stdout */

function logErrors(err) {
  console.log(err);
}

/* Create new todo */

function createTodo() {
  // send request to create new todo

  const userInput = $('#todoInput').val();

  if (userInput === '') {
    alert('Write something!');
    return;
  }

  $.post('/api/todos', { name: userInput })
  .then(function(newTodo) {
    $('#todoInput').val('');
    addTodo(newTodo);
  })
  .catch(function(err) {
    console.log(err);
  })
}

/* Remove todo */

function removeTodo(todo) {
  const clickedId = todo.data('id');
  const deleteUrl = '/api/todos/' + clickedId;
  $.ajax({
    method: 'DELETE',
    url: deleteUrl
  })
  .then(function(data) {
    todo.remove();
  })
  .catch(function(err) {
    console.log(err);
  })
}

/* Update todo */

function updateTodo(todo) {
  const updateUrl = '/api/todos/' + todo.data('id');
  const isDone = !todo.data('completed');
  const updateData = { completed: !isDone };

  $.ajax({
    method: 'PUT',
    url: updateUrl,
    data: updateData
  })
  .then(function(updatedTodo) {
    todo.toggleClass('done');
    todo.data('completed', isDone);
  })
  .catch(function(err) {
    console.log(err);
  })
}
