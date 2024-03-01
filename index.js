window.addEventListener('load', () => {
  if (document.querySelector('#ulaz-prelaz1') !== null) {
    window.sessionStorage.setItem('ulaz-prelaz1', 'displayed');
  }
})

if (window.sessionStorage.getItem('ulaz-prelaz1')) {
  document.querySelector('#ulaz-prelaz1').classList.remove('ulaz-prelaz')
}