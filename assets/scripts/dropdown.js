const selectSingle = document.getElementById('orderSection__dropdown');
const selectSingle_title = selectSingle.querySelector('.orderSection__InputTitle');
const selectSingle_labels = selectSingle.querySelectorAll('.orderSection__ItemLabel');
const selectSingle_content = document.querySelector('.orderSection__InputContent');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}