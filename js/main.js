let ravno = document.querySelector('.ravno');
let input = document.querySelector('.input');
let cler = document.querySelector('.cler');
let allCler = document.querySelector('.clerall');
let ul = document.querySelector('.list');
let lst1 = [];

function nums(...e) {
  lst1.push(e);
  input.value = lst1.join('');
}

function elem(e) {
  if (input.value != '') {
    if (lst1[lst1.length - 1] != '*' &&
      lst1[lst1.length - 1] != '/' &&
      lst1[lst1.length - 1] != '+' &&
      lst1[lst1.length - 1] != '-') {
      lst1.push(e);
      input.value = lst1.join('');
    }
  }

}
cler.addEventListener('click', function () {
  lst1.length = lst1.length - 1;
  input.value = lst1.join('');

});
allCler.addEventListener('click', function () {
  lst1.length = 0;
  input.value = lst1.join('');

});
ravno.addEventListener('click', function (e) {
  if (lst1[lst1.length - 1] != '*' &&
    lst1[lst1.length - 1] != '/' &&
    lst1[lst1.length - 1] != '+' &&
    lst1[lst1.length - 1] != '-') {
      let resul = lst1.join('');
    if(resul.split('*').length > 1){
      let all = eval(resul);
      input.value = all;
      lst1.length = 0;
      lst1[lst1.length] = all;
      let li = document.createElement('li');
      li.className = 'list__item';
      li.appendChild(document.createTextNode(resul +' = '+all));
      ul.appendChild(li);
    }
    else if(resul.split('/').length > 1){
      let all = eval(resul);
      input.value = all;
      lst1.length = 0;
      lst1[lst1.length] = all;
      let li = document.createElement('li');
      li.className = 'list__item';
      li.appendChild(document.createTextNode(resul +' = '+all));
      ul.appendChild(li);
    }
    else if(resul.split('+').length > 1){
      let all = eval(resul);
      input.value = all;
      lst1.length = 0;
      lst1[lst1.length] = all;
      let li = document.createElement('li');
      li.className = 'list__item';
      li.appendChild(document.createTextNode(resul +' = '+all));
      ul.appendChild(li);
    }
    else if(resul.split('-').length > 1){
      let all = eval(resul);
      input.value = all;
      lst1.length = 0;
      lst1[lst1.length] = all;
      let li = document.createElement('li');
      li.className = 'list__item';
      li.appendChild(document.createTextNode(resul +' = '+all));
      ul.appendChild(li);
    }
  }
});
