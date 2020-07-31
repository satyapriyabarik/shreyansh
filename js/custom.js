var currentPage = 0;

jQuery('.book')
.on('click', '.active', nextPage)
.on('click', '.flipped', prevPage);

jQuery('.book').hammer().on("swipeleft", nextPage);
jQuery('.book').hammer().on("swiperight", prevPage);

function prevPage() {
  
  jQuery('.flipped')
    .last()
    .removeClass('flipped')
    .addClass('active')
    .siblings('.page')
    .removeClass('active');
}
function nextPage() {
  
  jQuery('.active')
    .removeClass('active')
    .addClass('flipped')
    .next('.page')
    .addClass('active')
    .siblings();
    
    
}