$(function(){

  $('.white').click(function(){
    $(this).toggleClass('active')
  })
  $('.account').click(function(){
    $('.account-feed').stop().slideToggle()
  })
  $('.modal-click').click(function(){
    $('.personal').stop().slideToggle()
  })
  $('.btn-x').click(function(){
    $('.personal').stop().slideToggle()
  })
})