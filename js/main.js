/* eslint-disable no-unused-vars */
var avatarUrlInput = document.querySelector('#avatar');
var img = document.querySelector('img');
var formElement = document.querySelector('form');
var viewDiv = document.querySelectorAll('div[data-view]');
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

function renderProfile(data) {

  // username DOM
  var containerDiv = document.createElement('div');
  var usernameRow = document.createElement('div');
  var col1Div = document.createElement('div');
  var usernameH1 = document.createElement('h1');
  // profile img DOM elements
  var imgRow = document.createElement('div');
  var imgCol = document.createElement('div');
  var profileImg = document.createElement('img');
  // icon DOM
  var iconCol = document.createElement('div');
  var iconDiv = document.createElement('div');
  var userIcon = document.createElement('i');
  var usernameP = document.createElement('p');
  var iconDiv1 = document.createElement('div');
  var locationIcon = document.createElement('i');
  var locationP = document.createElement('p');
  var bioDiv = document.createElement('div');
  var bioP = document.createElement('p');
  // username DOM
  usernameRow.className = 'row';
  containerDiv.className = 'container';
  col1Div.className = 'column-full';
  usernameH1.textContent = data.profile.fullName;
  // profile img DOM
  imgRow.className = ('row');
  imgCol.className = ('column-half');
  profileImg.setAttribute('src', data.profile.avatarUrl);
  // icon DOM
  iconCol.className = 'column-half';
  iconDiv.className = 'icon';
  userIcon.className = 'fas fa-user fa-2x';
  usernameP.className = 'icon-text';
  usernameP.textContent = data.profile.username;
  iconDiv1.className = 'icon';
  locationIcon.className = 'fas fa-map-marker-alt fa-2x';
  locationP.className = 'icon-text';
  locationP.textContent = data.profile.location;
  bioDiv.className = 'icon';
  bioP.className = 'bio-text';
  bioP.textContent = data.profile.bio;

  // username DOM
  col1Div.appendChild(usernameH1);
  usernameRow.appendChild(col1Div);
  containerDiv.appendChild(usernameRow);
  // profile img DOM
  imgCol.appendChild(profileImg);
  imgRow.appendChild(imgCol);
  // icon DOM
  iconDiv.appendChild(userIcon);
  iconDiv.appendChild(usernameP);
  iconCol.appendChild(iconDiv);
  iconDiv1.appendChild(locationIcon);
  iconDiv1.appendChild(locationP);
  iconCol.appendChild(iconDiv1);
  bioDiv.appendChild(bioP);
  iconCol.appendChild(bioDiv);
  imgRow.appendChild(iconCol);
  containerDiv.appendChild(imgRow);

  return containerDiv;
}
function viewSwap(currentView) {
  if (currentView === 'profile') {
    viewDiv[0].className = 'view hidden';
    data.view = 'profile';
  } else if (currentView === 'edit-profile') {
    viewDiv[1].className = 'view hidden';
    viewDiv[0].className = 'view';
    data.view = 'edit-profile';
  }
}
