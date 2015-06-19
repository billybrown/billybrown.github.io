/*global $:false, jQuery:false, document:false, window:false, radix:false, console:false, setTimeout:false, enquire:false, Waypoint:false, sticky: false */

jQuery( document ).ready( function( $ ) {
	"use strict";

	var top = 25;
	var bill = 20;
	var startpush = 10;

	var Engine = {
		bill : {

			init : function() {


				$( document ).ready(function() {

					setTimeout(function() { 
						$('.Bill').removeClass('is-off');
					}, 100);

					setTimeout(function() { 
						$('.Bill').addClass("is-ready");
						$('.BillNote').addClass("is-out");
					}, 2000);
				});

			},

			move : function() {

				var bill = 260;

				var moveit = function(direction) {

					// unbind the keydown action to prevent repeats
					$(document).off('keydown');

					// get the current position and actually move the elemnt
					var original = parseInt($('.Bill').css("left"));

					if (direction == "left") {
						$('.Bill').css("left", original - bill);
					} else  {
						$('.Bill').css("left", original + bill);
					}

					$('.Bill').addClass("is-moveRight1");
					setTimeout(function() { 
						$('.Bill').removeClass("is-moveRight1");
						$('.Bill').addClass("is-moveRight2");
						setTimeout(function() { 
							$('.Bill').removeClass("is-moveRight2");
							$('.Bill').addClass("is-moveRight3");
							setTimeout(function() { 
								$('.Bill').removeClass("is-moveRight3");
								$('.Bill').addClass("is-moveRight4");
								setTimeout(function() { 
									$('.Bill').removeClass("is-moveRight4");
									Engine.bill.move(); 
								}, 250);
							}, 250);
						}, 250);
					}, 250);
				};


				$(document).on('keydown', function(e) {

					$('.BillNote').removeClass("is-out");

					var keyCode = e.keyCode; // 'D'
					if(keyCode == "68"){

						$('.Bill').removeClass('is-left');

						moveit("right");
					}
					else if(keyCode == "65"){ // 'A'

						$('.Bill').addClass('is-left');

						moveit("left");
					}
				});
			},

			money : function() {
				$('.bling').hover(function() {
					$('.Bill').addClass('is-golden');
				}, function() {
					$('.Bill').removeClass('is-golden');
				});
			}
		}
	};

	Engine.bill.init();
	Engine.bill.move();
	Engine.bill.money();

});