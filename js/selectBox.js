// Select Box Script
let selected = document.querySelectorAll('.select-box .selected');
let selectedText = document.querySelectorAll('.select-box .selected span');
let optionsContainer = document.querySelectorAll('.select-box .options-container');
let optionList = document.querySelectorAll('.select-box .option');
let data = document.querySelectorAll('.option input');

// let selected = document.querySelector('.select-box .selected');
// let selectedText = document.querySelector('.select-box .selected span');
// let optionsContainer = document.querySelector('.select-box .options-container');
// let optionList = document.querySelectorAll('.select-box .option');

// console.log('selected', selected);
// console.log('options container', optionsContainer);

// selected.addEventListener('click', () => {
//     optionsContainer.classList.toggle('active');
// });

// optionList.forEach((o) => {
//     o.addEventListener('click', () => {
//         selectedText.innerHTML = o.querySelector('label').innerHTML;
//         optionsContainer.classList.remove('active');
//     });
//     console.log('o', o.children.pickUpTime);
// });

// Menampilkan Dropdown Select Box
for (let j = 0; j < selected.length; j++) {
  selected[j].addEventListener('click', () => {
    optionsContainer[j].classList.toggle('active');
  });
  console.log(j);

  optionList.forEach((o) => {
    o.addEventListener('click', () => {
      selectedText.innerHTML = o.querySelector('label').innerHTML;
      optionsContainer.classList.remove('active');
      console.info('selectedText', selected);
      console.info('option container', optionsContainer);
    });
  });
}

// for (let r = 0; r < optionList.length; r++) {
//   console.info('yang diclick=', optionList[r]);
// }

// console.log(data[0].attributes.name);
// console.log(optionList[6].innerHTML);
// console.log('selected', selected);
