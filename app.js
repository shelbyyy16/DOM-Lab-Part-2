console.log('js:loaded');

const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];


//TASK 1

const mainEl = document.querySelector("main");

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.classList.add("flex-ctr");

//TASK 2

const topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add("flex-around");

//TASK 3

menuLinks.forEach(function (link) {
    const anchorElement = document.createElement("a");
    anchorElement.setAttribute("href", link.href);
    anchorElement.textContent = link.text;
    topMenuEl.appendChild(anchorElement);
});


//TASK 4


const subMenuEl = document.getElementById('sub-menu');

subMenuEl.style.height = "100%";

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute';

subMenuEl.style.top = '0';

//TASK 5

const topMenuLinks = topMenuEl.querySelectorAll('a');

let showingSubMenu = false;

// Assuming you have already selected topMenuEl and topMenuLinks as shown earlier.

topMenuEl.addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.tagName !== 'A') {
        return;
    }
    console.log(event.target.textContent);
});





