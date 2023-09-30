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


				var distance = 200;
				var speed = 200;
				var jumpspeed = 300;

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

					$('.Bill').addClass('is-moveRight1');
					setTimeout(function() { 
						$('.Bill').removeClass('is-moveRight1').addClass('is-moveRight2');
						setTimeout(function() { 
							$('.Bill').removeClass('is-moveRight2').addClass('is-moveRight3');
							setTimeout(function() { 
								$('.Bill').removeClass('is-moveRight3');
								Engine.bill.move(); 
							}, speed);
						}, speed);
					}, speed);
				};

				var jumpit = function(direction) {



					// unbind the keydown action to prevent repeats
					$(document).off('keydown');

					$('.Bill').addClass('is-jumping');
					setTimeout(function() { 
						$('.Bill').removeClass('is-jumping');
						Engine.bill.move(); 
					}, jumpspeed);
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
					else if(keyCode == "83"){ // 'S'

						jumpit();
					}
				});
			},

			money : function() {
				$('.SiteHeader').hover(function() {
					$('.Bill').addClass('is-golden');
				}, function() {
					$('.Bill').removeClass('is-golden');
				});
			},

			explode : function() {
				$('.Bill svg').click(function() {
					$('.Bill').toggleClass('is-explode');
				});
			},

			intense : function() {
				$('.Bill svg').hover(function() {
					$('.Bill').addClass('is-intense');
				}, function() {
					$('.Bill').removeClass('is-intense');
				});
			}
		}
	};

	Engine.bill.init();
	Engine.bill.move();
	Engine.bill.money();
	Engine.bill.explode();
	Engine.bill.intense();

	//setTimeout(function() {
	//	Engine.bill.breath();
	//}, 2500);

});