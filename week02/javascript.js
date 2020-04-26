/*When user click on "Welcome Message" block, change text to "Have a Good Time!".*/
const welcomeMsg = document.querySelector('header')
welcomeMsg.addEventListener('click', function () {
  welcomeMsg.innerHTML = `Have a Good Time!`

})

/*When user clicks the menu at the top-right corner, show the hidden mobile menu. After that, the user can click the close button to hide it.*/
const menu = document.querySelector('.menu')
const hiddenMenu = document.querySelector('.hiddenMenu')
const cancle = document.querySelector('.X')

menu.addEventListener('click', function () {
  hiddenMenu.style.display = 'inline-block';
})

cancle.addEventListener('click', function () {
  hiddenMenu.style.display = 'none';
})


/*When user clicks the Call-to-Action button, show those hidden content boxes.*/
const btn = document.querySelector('.btn')
const hiddenBox = document.querySelector('.hiddenBox')

btn.addEventListener('click', function () {
  hiddenBox.style.display = 'block';
})

