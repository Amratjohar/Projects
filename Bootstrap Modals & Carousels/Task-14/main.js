var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

// document.addEventListener('DOMContentLoaded', function () {
// 	var form = document.getElementById('registration-form');
// 	var modal = document.getElementById('modal');
// 	var closeBtn = document.getElementsByClassName('close')[0];

// 	form.addEventListener('submit', function (event) {
// 		event.preventDefault();
// 		modal.style.display = 'block';
// 	});

// 	closeBtn.addEventListener('click', function () {
// 		modal.style.display = 'none';
// 		form.reset();
// 	});

// 	window.addEventListener('click', function (event) {
// 		if (event.target == modal) {
// 			modal.style.display = 'none';
// 			form.reset();
// 		}
// 	});
// });