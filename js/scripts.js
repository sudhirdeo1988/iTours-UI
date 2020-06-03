$(document).ready(function () {
	$(function () {
		$('form').attr('autocomplete', 'off');
		$('input').attr('autocomplete', 'off');
	});

	if ($('.dropdown.selectable').length > 0) {
		$('.dropdown.selectable .dropdown-item').on('click', function(){
			var thisOption = $(this)[0].textContent;
			$(this).parents('.dropdown.selectable').children('.btn-dd')[0].textContent = thisOption;
		})
	}
	
	$('body').delegate('.c-userBlock .card .st-editProfile', 'click', function(){
		var thidParent = $(this).parents('.card');
		if(!thidParent.hasClass('st-editable')){
		thidParent.addClass('st-editable');
		thidParent.find('.formField').find('.txtBox').prop('readonly', false);
		thidParent.find('.formField').find('.txtBox').prop('disabled', false);
		}else{
		thidParent.removeClass('st-editable');
		thidParent.find('.formField').find('.txtBox').prop('readonly', true);
		thidParent.find('.formField').find('.txtBox').prop('disabled', true);
		}
	})
	$('.mobile_hamb, .closeSidebar').on('click',function(){
		$('body').addClass('st-sidebarOpen');
	});
	$('.closeSidebar').on('click',function(){
		$('body').removeClass('st-sidebarOpen');
	});
	// initilizeDropdown();
	if ($('.js-cardSlider').length > 0) {
		$('.js-cardSlider').owlCarousel({
			loop       : false,
			margin     : 16,
			nav        : true,
			dots       : false,
			responsive : {
				0    : {
					items : 1
				},
				560  : {
					items : 2
				},
				960  : {
					items : 3
				},
				1024 : {
					items : 4
				}
			}
		});
	}

	if ($('.js-mainSlider').length > 0) {
		$('.js-mainSlider').owlCarousel({
			margin             : 0,
			nav                : false,
			dots               : false,
			items              : 1,
			loop               : true,
			autoplay           : true,
			autoplayHoverPause : true,
			smartSpeed         : 1500
			});
	}

	// filters option
	$('.c-checkSquare .filterCheckbox').on('click', function () {
		//e.preventDefault();
		if ($(this).hasClass('st-checked')) {
			$(this).removeClass('st-checked');
		}
		else {
			$(this).addClass('st-checked');
		}
	});

	//**Site Tooltips
	$(function () {
		if($("[data-toggle='tooltip']").length > 0){
			$("[data-toggle='tooltip']").tooltip({placement: 'bottom'});
		}
	});

	if ($('.c-select2DD').length) {
		// 	$('.c-select2DD select').select2();
		$('.c-select2DD select').select2({
			minimumInputLength : 1
		});
	}
	
	// ------ Function to load gallery after inirialize
	$("body").delegate(".js-gallery", "click", function() {
		const tabID = $(this).attr("id");
		const galleryID = $("#gallery-" + tabID.split("-")[1]);
		if (galleryID.hasClass("loaded")) {
		  return;
		} else {
		  galleryID.prepend('<div class="galleryLoader"></div>');
		  setTimeout(function() {
			galleryID.children(".galleryLoader").remove();
			galleryID.find(".c-photoGallery").removeClass("js-dynamicLoad");
			galleryID.addClass("loaded");
		  }, 1500);
		}
	  });
});
function error_msg_alert(message){
	var base_url = $('#base_url').val();
	var class_name = 'alert-danger';
	$.post(base_url+'Tours_B2B/notification_modal.php', {message:message,class_name:class_name}, function(data){
		$('#site_alert').html(data);
	});
}
function success_msg_alert(message){
	var base_url = $('#base_url').val();
	var class_name = 'alert-success';
	$.post(base_url+'Tours_B2B/notification_modal.php', {message:message,class_name:class_name}, function(data){
		$('#site_alert').html(data);
	});
}
// JQuery range slider
function reinit(bestlow_cost,besthigh_cost){
	var randno = 'slider_'+new Date().getTime();
	$('.slider-input').attr({
	  id: randno,
	  min: parseFloat(bestlow_cost).toFixed(2),
	  max: parseFloat(besthigh_cost).toFixed(2)
	});
	var valueText = parseFloat(bestlow_cost).toFixed(2) + ',' + parseFloat(besthigh_cost).toFixed(2); 
	$('#'+randno).val(valueText);
	
	var rangeMinValue = document.getElementById(randno).min;
	var rangeMaxValue = document.getElementById(randno).max;
	var rangeStep = $('#'+randno).data('step');
	
	$('#'+randno).jRange({
	  from       : rangeMinValue,
	  to         : rangeMaxValue,
	  step       : rangeStep,
	  showLabels : true,
	  isRange    : true,
	  width      : 230,
	  showScale  : true,
	  onbarclicked: function() { 
		passSliderValue();
	  },
	  ondragend: function() { 
		passSliderValue();
	  }
	});
}

//Generate uuid for each item
function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	return v.toString(16);
	});
}
//Display Cart
function display_cart(cart_item_count){
	var base_url = $('#base_url').val();
	var cart_item_count = $('#'+cart_item_count).html();
	
	if (typeof Storage !== 'undefined') {
		if (localStorage) {
			var cart_list_arr = JSON.parse(localStorage.getItem('cart_list_arr'));
		} 
		else {
			var cart_list_arr = JSON.parse(window.sessionStorage.getItem('cart_list_arr'));	
		}
	}
	$.post(base_url + 'Tours_B2B/cart_data_modal.php', { cart_list_arr : cart_list_arr }, function (data) {
		$('#cart_div').html(data);
	}) 
}
//Get Cart data items
function get_cart_items(cart_list_arr){
	var base_url = $('#base_url').val();
    $.post(base_url + 'Tours_B2B/get_cart_items.php', { cart_list_arr : cart_list_arr }, function (data) {
		$('#cart_items').html(data);
	});
}
//Get checkout page cart data items
function get_checkoutpage_cart(){
	var base_url = $('#base_url').val();
	if (typeof Storage !== 'undefined') {
		if (localStorage) {
			var currency_id = localStorage.getItem('global_currency');
		} else {
			var currency_id = window.sessionStorage.getItem('global_currency');
		}
	}
	if (typeof Storage !== 'undefined') {
		if (localStorage) {
			var cart_list_arr = JSON.parse(localStorage.getItem('cart_list_arr'));
		}
		else {
			var cart_list_arr = JSON.parse(window.sessionStorage.getItem('cart_list_arr'));	
		}
	}

    $.post(base_url + 'Tours_B2B/checkout_pages/get_checkoutpage_cart.php', { cart_list_arr : cart_list_arr,currency : currency_id}, function (data) {
		$('#get_checkoutpage_cart').html(data);
	});
}
//Checkout page country selection
function get_country_code(country_id,country_code){
	var base_url = $('#base_url').val();
	var country_id = $('#'+country_id).val();

	$.post(base_url + 'Tours_B2B/view/get_country_code.php', { country_id : country_id}, function (data) {
		$('#country_code').val(data);
	});
}
function get_select_hotel(city_id,hotel_id,check_indate,check_outdate){
	var base_url = $('#base_url').val();

	var final_arr = [];
	final_arr.push({
		rooms : {
			room     : parseInt(1),
			adults   : parseInt(2),
			child    : parseInt(0),
			childAge : []
		}
	});
	adult_count = 2;
	child_count = 0;
	final_arr = JSON.stringify(final_arr);
	// Store
	if (window.sessionStorage) {
		try {
			sessionStorage.setItem('final_arr', final_arr);
		} catch (e) {
			console.log(e);
		}
	}
	const url  = 'city_id=' +
	window.btoa(city_id) +
	'&hotel_id=' +
	window.btoa(hotel_id) +
	'&check_indate=' +
	encodeURIComponent(check_indate) +
	'&check_outdate=' +
	encodeURIComponent(check_outdate) +
	'&star_category_arr=' +
	encodeURIComponent('') +
	'&dynamic_room_count=' +
	window.btoa(1) +
	'&adult_count=' +
	window.btoa(adult_count) +
	'&child_count=' +
	window.btoa(child_count) +
	'&final_arr=' +
	encodeURIComponent(final_arr) +
	'&nationality=' +
	encodeURIComponent('');
	
	window.location.href = base_url +'Tours_B2B/view/hotel/hotel-listing.php?'+url;
}
function pagination_load(dataset, columns, bg_stat = false,footer_string = false,pg_length = 20,table_id){ //1. dataset,2.columns titles,3.if want bg color,4.if want footer,5.manual pagelength change
	var html = "";
	var dataset_main = JSON.parse(dataset);
	if(bg_stat){
		var table_data = [];
		var bg = [];
		$.each(dataset_main, function(i, item) {
			table_data.push(dataset_main[i].data) // keeping different arrays for data and background color
			bg.push(dataset_main[i].bg)
		});
		table_data = JSON.parse(JSON.stringify(table_data));
	}
	else{
		var table_data = JSON.parse(dataset);
	}
	if(footer_string){
		table_data.pop();
		if($.trim($('#'+table_id+' tfoot').html())){
			document.getElementById(table_id).deleteTFoot();
		}
		for(var i=0;i<parseInt(dataset_main[dataset_main.length - 1].footer_data['total_footers']);i++){
			html += "<td colspan='"+dataset_main[dataset_main.length - 1].footer_data['col'+i]+"'>"+dataset_main[dataset_main.length - 1].footer_data['namecol'+i]+" : "+dataset_main[dataset_main.length - 1].footer_data['foot'+i]+"</td>";
		}
		html = "<tfoot><tr>"+html+"</tr></tfoot>";
	}
	if($.fn.DataTable.isDataTable("#"+table_id)) {
		$('#'+table_id).DataTable().clear().destroy(); // for managin error
	}

	var table = $('#'+table_id).DataTable({
		data: table_data,
		"pageLength": pg_length,
		columns: columns,
		"searching": true,
		createdRow: function (row, data, dataIndex) { // adds bg color for every invalid point
		if(bg){
			$(row).addClass(bg[dataIndex]);
		}
		}
	});
	$('#'+table_id).append(html);
}
//Selected currency rates
function get_currency_rates(to,from){
	var cache_currencies = JSON.parse($('#cache_currencies').val());
	var to_currency = (cache_currencies.find(el => el.currency_id === to) !== undefined ) ? cache_currencies.find(el => el.currency_id === to) : '0';
	var from_currency = (cache_currencies.find(el => el.currency_id === from) !== undefined ) ? cache_currencies.find(el => el.currency_id === from) : '0';

	return to_currency.currency_rate+'-'+from_currency.currency_rate;
}