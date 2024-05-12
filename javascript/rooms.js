function openModal() {
  document.getElementById('modal1').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal1').style.display = 'none';
}

function openModal1() {
  document.getElementById('modal2').style.display = 'block';
}

function closeModal1() {
  document.getElementById('modal2').style.display = 'none';
}

function openModal2() {
  document.getElementById('modal3').style.display = 'block';
}

function closeModal2() {
  document.getElementById('modal3').style.display = 'none';
}

function openModal3() {
  document.getElementById('modal4').style.display = 'block';
}

function closeModal3() {
  document.getElementById('modal4').style.display = 'none';
}

function openModal4() {
  document.getElementById('modal5').style.display = 'block';
}

function closeModal4() {
  document.getElementById('modal5').style.display = 'none';
}

function openModal5() {
  document.getElementById('modal6').style.display = 'block';
}

function closeModal5() {
  document.getElementById('modal6').style.display = 'none';
}


let detailButton1 = document.getElementById('button1');

detailButton1.addEventListener('click', function () {
  openModal('modal1');
});

let closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function () {
  closeModal('modal1');
});

window.addEventListener('click', function (event) {
  if (event.target == document.getElementById('modal1')) {
    closeModal('modal1');
  }
});

let detailButton2 = document.getElementById('button2');

detailButton2.addEventListener('click', function () {
  openModal1('modal2');
});

let closeBtn1 = document.querySelector('.close1');
closeBtn1.addEventListener('click', function () {
  closeModal1('modal2');
});

window.addEventListener('click', function (event) {
  if (event.target == document.getElementById('modal2')) {
    closeModal1('modal2');
  }
});

let detailButton3 = document.getElementById('button3');

detailButton3.addEventListener('click', function () {
  openModal2('modal3');
});

let closeBtn2 = document.querySelector('.close2');
closeBtn2.addEventListener('click', function () {
  closeModal2('modal3');
});

window.addEventListener('click', function (event) {
  if (event.target == document.getElementById('modal3')) {
    closeModal2('modal3');
  }
});

let detailButton4 = document.getElementById('button4');

detailButton4.addEventListener('click', function () {
  openModal3('modal4');
});

let closeBtn3 = document.querySelector('.close3');
closeBtn3.addEventListener('click', function () {
  closeModal3('modal4');
});

window.addEventListener('click', function (event) {
  if (event.target == document.getElementById('modal4')) {
    closeModal3('modal4');
  }
});

let detailButton5 = document.getElementById('button5');

detailButton5.addEventListener('click', function () {
  openModal4('modal5');
});

let closeBtn4 = document.querySelector('.close4');
closeBtn4.addEventListener('click', function () {
  closeModal4('modal5');
});

window.addEventListener('click', function (event) {
  if (event.target == document.getElementById('modal5')) {
    closeModal4('modal5');
  }
});

let detailButton6 = document.getElementById('button6');

detailButton6.addEventListener('click', function () {
  openModal5('modal6');
});

let closeBtn5 = document.querySelector('.close5');
closeBtn5.addEventListener('click', function () {
  closeModal5('modal6');
});

window.addEventListener('click', function (event) {
  if (event.target == document.getElementById('modal6')) {
    closeModal5('modal6');
  }
});
