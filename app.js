console.log('js:loaded');

const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


//Cache the <main> element in a variable named mainEl

const mainEl = document.querySelector("main");


//Set the background color of the mainEl element using the --main-bg CSS custom property

mainEl.style.backgroundColor = 'var(--main-bg)';

//Set the content of mainEl to <h1>SEI Rocks!</h1>.

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

//Add a class of "flex-ctr" to the mainEl element

mainEl.classList.add("flex-ctr");

//Cache the <nav id="top-menu"> element in a variable named topMenuEl

const topMenuEl = document.getElementById("top-menu");

//Set the height topMenuEl element to be 100%.

topMenuEl.style.height = "100%";

//Set the background color of topMenuEl using the --top-menu-bg CSS custom property.

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Add a class of flex-around to topMenuEl.

topMenuEl.classList.add("flex-around");

//Create an <a> for every "link" object
//On the new element, add an href attribute with its value set to the href property of the “link” 
//Set the new element’s content to the value of the text property of the “link” object.
//Append the new element to the topMenuEl element using the node.appendChild method

menuLinks.forEach(function (link) {
    const anchorElement = document.createElement("a");
    anchorElement.setAttribute("href", link.href);
    anchorElement.textContent = link.text;
    topMenuEl.appendChild(anchorElement);
});

//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.

const subMenuEl = document.getElementById('sub-menu');

//Set the background color of subMenuEl using the --sub-menu-bg CSS custom property.

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

//Add the class of flex-around to the subMenuEl element

subMenuEl.classList.add('flex-around');