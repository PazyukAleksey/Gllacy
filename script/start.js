$(document).ready(function() {

	let clearClassList = () => {
		$('#body').hasClass('slider-bg-1') ? $('#body').removeClass('slider-bg-1') : false;	
		$('#body').hasClass('slider-bg-2') ? $('#body').removeClass('slider-bg-2') : false;	
		$('#body').hasClass('slider-bg-3') ? $('#body').removeClass('slider-bg-3') : false;
		$('.slider-btn').hasClass('active') ? $('.slider-btn').removeClass('active') : false;
		$('.slider-item').hide();
	}

	$("#slider_btn_1").click(function(e) {
		clearClassList()
		document.body.classList.add('slider-bg-1');
		$("#slider_btn_1").addClass('active');
		$('#slider-1').show();
	}) 
	$("#slider_btn_2").click(function(e) {
		clearClassList()
		document.body.classList.add('slider-bg-2');
		$("#slider_btn_2").addClass('active');
		$('#slider-2').show();
	}) 
	$("#slider_btn_3").click(function(e) {
		clearClassList()
		document.body.classList.add('slider-bg-3');
		$("#slider_btn_3").addClass('active');
		$('#slider-3').show();
	}) 
})