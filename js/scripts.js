/*global $:false, jQuery:false, document:false, window:false, radix:false, console:false, setTimeout:false, enquire:false, Waypoint:false, sticky: false */

jQuery( document ).ready( function( $ ) {
	"use strict";

	var moving = false;

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

			breath : function() {

				var breathtime = 500;

				if (moving === false) {
					$('.Bill__1').attr("class", "Bill__1 is-hidden");
					$('.Bill__2').attr("class", "Bill__2");
					setTimeout(function() { 
						if (moving === false) {
							$('.Bill__1').attr("class", "Bill__1");
							$('.Bill__2').attr("class", "Bill__2 is-hidden");
							setTimeout(function() { 
								if (moving === false) {
									Engine.bill.breath(); 
								}
							}, breathtime);
						}
					}, breathtime);
				}
			},

			move : function() {


				var distance = 100;
				var speed = 150;

				var moveit = function(direction) {
					moving = true;

					// unbind the keydown action to prevent repeats
					$(document).off('keydown');

					// get the current position and actually move the elemnt
					var original = parseInt($('.Bill').css("left"));

					if (direction == "left") {
						$('.Bill').css("left", original - distance);
					} else  {
						$('.Bill').css("left", original + distance);
					}

					$('.Bill__1').attr("class", "Bill__1 is-hidden");
					$('.Bill__2').attr("class", "Bill__2 is-hidden");
					$('.Bill__3').attr("class", "Bill__3");
					setTimeout(function() { 
						$('.Bill__3').attr("class", "Bill__3 is-hidden");
						$('.Bill__4').attr("class", "Bill__4");
						setTimeout(function() { 
							$('.Bill__4').attr("class", "Bill__4 is-hidden");
							$('.Bill__5').attr("class", "Bill__5");
							setTimeout(function() { 
								$('.Bill__5').attr("class", "Bill__5 is-hidden");
								$('.Bill__6').attr("class", "Bill__6");
								setTimeout(function() { 
									$('.Bill__6').attr("class", "Bill__6 is-hidden");
									$('.Bill__1').attr("class", "Bill__1");
									Engine.bill.move(); 
									moving = false;
								}, speed);
							}, speed);
						}, speed);
					}, speed);
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

	setTimeout(function() {
		Engine.bill.breath();
	}, 2500);

});