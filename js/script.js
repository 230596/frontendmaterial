const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav,{
closeOnClick:true,
deggeble:true
});
       
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
indicators: false,
height: 500,
transition: 600,
interval: 3000
});

const modal = document.querySelectorAll('.modal');
M.Modal.init(modal);
  
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

const materialBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBox,{
inDuration: 50
});

const scrollSpy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollSpy,{
scrollOffset: 50
});