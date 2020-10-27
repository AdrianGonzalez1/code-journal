var avatarUrlInput = document.querySelector('#avatar');
var img = document.querySelector('img');
var formElement = document.querySelector('form');

avatarUrlInput.addEventListener('input', function (event) {
  img.setAttribute('src', event.target.value);
});

formElement.addEventListener('submit', function (event) {
  event.preventDefault();
  data.profile.avatarUrl = formElement.elements.avatarUrl.value;
  data.profile.username = formElement.elements.username.value;
  data.profile.fullName = formElement.elements.fullName.value;
  data.profile.location = formElement.elements.location.value;
  data.profile.bio = formElement.elements.bio.value;
  formElement.reset();
  img.setAttribute('src', 'images/placeholder-image-square.jpg');
});

window.addEventListener('beforeunload', function () {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('profile-local-storage', dataJSON);
});
