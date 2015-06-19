/*global $:false, jQuery:false, document:false, window:false, radix:false, console:false, setTimeout:false, enquire:false, Waypoint:false, sticky: false */

jQuery( document ).ready( function( $ ) {
	"use strict";

	var top = 25;
	var bill = 20;
	var startpush = 10;

	var Engine = {
		bill : {

			init : function() {
				// this animates bill

				$('.Hair--1').css("bottom", bill *  	24).css("left", bill * 4);
				$('.Hair--2').css("bottom", bill *  	23).css("left", bill * 3);
				$('.Hair--3').css("bottom", bill *  	23).css("left", bill * 4);
				$('.Hair--4').css("bottom", bill *  	23).css("left", bill * 5);
 	
				$('.Face--1').css("bottom", bill *  	22).css("left", bill * 3);
				$('.Face--2').css("bottom", bill *  	22).css("left", bill * 4);
				$('.Face--3').css("bottom", bill *  	22).css("left", bill * 5);
				$('.Face--4').css("bottom", bill *  	21).css("left", bill * 3);
				$('.Face--5').css("bottom", bill *  	21).css("left", bill * 4);
				$('.Face--6').css("bottom", bill *  	21).css("left", bill * 5);
				$('.Face--7').css("bottom", bill *  	20).css("left", bill * 3);
				$('.Face--8').css("bottom", bill *  	20).css("left", bill * 4);
				$('.Face--9').css("bottom", bill *  	20).css("left", bill * 5);
	
				$('.Shirt--1').css("bottom", bill * 	20).css("left", bill * 2);
				$('.Shirt--2').css("bottom", bill * 	19).css("left", bill * 1);
				$('.Shirt--3').css("bottom", bill * 	19).css("left", bill * 2);
				$('.Shirt--4').css("bottom", bill * 	19).css("left", bill * 3);
				$('.Tie--1').css("bottom", bill *   	19).css("left", bill * 4);
				$('.Shirt--5').css("bottom", bill * 	19).css("left", bill * 5);
				$('.Shirt--6').css("bottom", bill * 	19).css("left", bill * 6);
				$('.Shirt--7').css("bottom", bill * 	18).css("left", bill * 0);
				$('.Shirt--8').css("bottom", bill * 	18).css("left", bill * 1);
				$('.Shirt--9').css("bottom", bill * 	18).css("left", bill * 2);
				$('.Shirt--10').css("bottom", bill * 	18).css("left", bill * 3);
				$('.Tie--2').css("bottom", bill * 		18).css("left", bill * 4);
				$('.Shirt--11').css("bottom", bill * 	18).css("left", bill * 5);
				$('.Shirt--12').css("bottom", bill * 	18).css("left", bill * 6);
				$('.Shirt--13').css("bottom", bill * 	18).css("left", bill * 7);
				$('.Shirt--14').css("bottom", bill * 	17).css("left", bill * 0);
				$('.Shirt--15').css("bottom", bill * 	17).css("left", bill * 1);
				$('.Shirt--16').css("bottom", bill * 	17).css("left", bill * 2);
				$('.Shirt--17').css("bottom", bill * 	17).css("left", bill * 3);
				$('.Tie--3').css("bottom", bill * 		17).css("left", bill * 4);
				$('.Shirt--18').css("bottom", bill * 	17).css("left", bill * 5);
				$('.Shirt--19').css("bottom", bill * 	17).css("left", bill * 6);
				$('.Shirt--20').css("bottom", bill * 	17).css("left", bill * 7);
				$('.Shirt--21').css("bottom", bill * 	16).css("left", bill * 0);
				$('.Shirt--22').css("bottom", bill * 	16).css("left", bill * 1);
				$('.Shirt--23').css("bottom", bill * 	16).css("left", bill * 2);
				$('.Shirt--24').css("bottom", bill * 	16).css("left", bill * 3);
				$('.Tie--4').css("bottom", bill * 		16).css("left", bill * 4);
				$('.Shirt--25').css("bottom", bill * 	16).css("left", bill * 5);
				$('.Shirt--26').css("bottom", bill * 	16).css("left", bill * 6);
				$('.Shirt--27').css("bottom", bill * 	16).css("left", bill * 7);

				$('.Shirt--28').css("bottom", bill * 	15).css("left", bill * 1);
				$('.Shirt--29').css("bottom", bill * 	15).css("left", bill * 2);
				$('.Shirt--30').css("bottom", bill * 	15).css("left", bill * 3);
				$('.Tie--5').css("bottom", bill * 		15).css("left", bill * 4);
				$('.Shirt--31').css("bottom", bill * 	15).css("left", bill * 5);
				$('.Shirt--32').css("bottom", bill * 	15).css("left", bill * 6);

				$('.Shirt--33').css("bottom", bill * 	14).css("left", bill * 1);
				$('.Shirt--34').css("bottom", bill * 	14).css("left", bill * 2);
				$('.Shirt--35').css("bottom", bill * 	14).css("left", bill * 3);
				$('.Tie--6').css("bottom", bill * 		14).css("left", bill * 4);
				$('.Shirt--36').css("bottom", bill * 	14).css("left", bill * 5);
				$('.Shirt--37').css("bottom", bill * 	14).css("left", bill * 6);

				$('.Shirt--38').css("bottom", bill * 	13).css("left", bill * 1);
				$('.Shirt--39').css("bottom", bill * 	13).css("left", bill * 2);
				$('.Shirt--40').css("bottom", bill * 	13).css("left", bill * 3);
				$('.Tie--7').css("bottom", bill *    	13).css("left", bill * 4);
				$('.Shirt--41').css("bottom", bill * 	13).css("left", bill * 5);
				$('.Shirt--42').css("bottom", bill * 	13).css("left", bill * 6);

				$('.Shirt--43').css("bottom", bill * 	12).css("left", bill * 1);
				$('.Shirt--44').css("bottom", bill * 	12).css("left", bill * 2);
				$('.Shirt--45').css("bottom", bill * 	12).css("left", bill * 3);
				$('.Shirt--46').css("bottom", bill * 	12).css("left", bill * 4);
				$('.Shirt--47').css("bottom", bill * 	12).css("left", bill * 5);
				$('.Shirt--48').css("bottom", bill * 	12).css("left", bill * 6);

				$('.LeftArm--1').css("bottom", bill * 	15).css("left", bill * 0);
				$('.LeftArm--2').css("bottom", bill * 	14).css("left", bill * 0);
				$('.LeftArm--3').css("bottom", bill * 	13).css("left", bill * 0);
				$('.LeftArm--4').css("bottom", bill * 	12).css("left", bill * 0);
				$('.LeftArm--5').css("bottom", bill * 	11).css("left", bill * 0);
				$('.LeftArm--6').css("bottom", bill * 	10).css("left", bill * 0);

				$('.RightArm--1').css("bottom", bill * 	15).css("left", bill * 7);
				$('.RightArm--2').css("bottom", bill * 	14).css("left", bill * 7);
				$('.RightArm--3').css("bottom", bill * 	13).css("left", bill * 7);
				$('.RightArm--4').css("bottom", bill * 	12).css("left", bill * 7);
				$('.RightArm--5').css("bottom", bill * 	11).css("left", bill * 7);
				$('.RightArm--6').css("bottom", bill * 	10).css("left", bill * 7);

				$('.Belt--1').css("bottom", bill * 		11).css("left", bill * 1);
				$('.Belt--2').css("bottom", bill * 		11).css("left", bill * 2);
				$('.Belt--3').css("bottom", bill * 		11).css("left", bill * 3);
				$('.Belt--4').css("bottom", bill * 		11).css("left", bill * 4);
				$('.Belt--5').css("bottom", bill * 		11).css("left", bill * 5);
				$('.Belt--6').css("bottom", bill * 		11).css("left", bill * 6);

				$('.Pants--1').css("bottom", bill * 	10).css("left", bill * 1);
				$('.Pants--2').css("bottom", bill * 	10).css("left", bill * 2);
				$('.Pants--3').css("bottom", bill * 	10).css("left", bill * 3);
				$('.Pants--4').css("bottom", bill * 	10).css("left", bill * 4);
				$('.Pants--5').css("bottom", bill * 	10).css("left", bill * 5);
				$('.Pants--6').css("bottom", bill * 	10).css("left", bill * 6);

				$('.Pants--7').css("bottom", bill *  	9).css("left", bill * 0);
				$('.Pants--8').css("bottom", bill *  	9).css("left", bill * 1);
				$('.Pants--9').css("bottom", bill *  	9).css("left", bill * 2);
				$('.Pants--10').css("bottom", bill * 	9).css("left", bill * 3);
				$('.Pants--11').css("bottom", bill * 	9).css("left", bill * 4);
				$('.Pants--12').css("bottom", bill * 	9).css("left", bill * 5);
				$('.Pants--13').css("bottom", bill * 	9).css("left", bill * 6);
	
				$('.Pants--14').css("bottom", bill * 	8).css("left", bill * 0);
				$('.Pants--15').css("bottom", bill * 	8).css("left", bill * 1);
				$('.Pants--16').css("bottom", bill * 	8).css("left", bill * 5);
				$('.Pants--17').css("bottom", bill * 	8).css("left", bill * 6);
	
				$('.Pants--18').css("bottom", bill * 	7).css("left", bill * 0);
				$('.Pants--19').css("bottom", bill * 	7).css("left", bill * 1);
				$('.Pants--20').css("bottom", bill * 	7).css("left", bill * 5);
				$('.Pants--21').css("bottom", bill * 	7).css("left", bill * 6);
	
				$('.Pants--22').css("bottom", bill * 	6).css("left", bill * 0);
				$('.Pants--23').css("bottom", bill * 	6).css("left", bill * 1);
				$('.Pants--24').css("bottom", bill * 	6).css("left", bill * 5);
				$('.Pants--25').css("bottom", bill * 	6).css("left", bill * 6);
	
				$('.Pants--26').css("bottom", bill * 	5).css("left", bill * 0);
				$('.Pants--27').css("bottom", bill * 	5).css("left", bill * 1);
				$('.Pants--28').css("bottom", bill * 	5).css("left", bill * 5);
				$('.Pants--29').css("bottom", bill * 	5).css("left", bill * 6);
	
				$('.Pants--30').css("bottom", bill * 	4).css("left", bill * 0);
				$('.Pants--31').css("bottom", bill * 	4).css("left", bill * 1);
				$('.Pants--32').css("bottom", bill * 	4).css("left", bill * 5);
				$('.Pants--33').css("bottom", bill * 	4).css("left", bill * 6);
	
				$('.Pants--34').css("bottom", bill * 	3).css("left", bill * 0);
				$('.Pants--35').css("bottom", bill * 	3).css("left", bill * 1);
				$('.Pants--36').css("bottom", bill * 	3).css("left", bill * 5);
				$('.Pants--37').css("bottom", bill * 	3).css("left", bill * 6);
	
				$('.Pants--38').css("bottom", bill * 	2).css("left", bill * 0);
				$('.Pants--39').css("bottom", bill * 	2).css("left", bill * 1);
				$('.Pants--40').css("bottom", bill * 	2).css("left", bill * 5);
				$('.Pants--41').css("bottom", bill * 	2).css("left", bill * 6);
	
				$('.Pants--42').css("bottom", bill * 	1).css("left", bill * 0);
				$('.Pants--43').css("bottom", bill * 	1).css("left", bill * 1);
				$('.Pants--44').css("bottom", bill * 	1).css("left", bill * 5);
				$('.Pants--45').css("bottom", bill * 	1).css("left", bill * 6);

				$('.Shoe--1').css("bottom", bill * 0).css("left", bill * 0);
				$('.Shoe--2').css("bottom", bill * 0).css("left", bill * 1);
				$('.Shoe--3').css("bottom", bill * 0).css("left", bill * 5);
				$('.Shoe--4').css("bottom", bill * 0).css("left", bill * 6);


				$( document ).ready(function() {
					$('.Bill').removeClass('is-off');
				});


			},

			move : function() {

				var bill = 100;


				$(document).on('keydown', function(e) {

					var keyCode = e.keyCode;
					// the letter 'D' is pressed (the right direction)
					if(keyCode === "68"){

						$( '.Bill div' ).each(function() {
							var original = parseInt($(this).css("left"), radix);
						  	$(this).css("left", original + bill);
						});

						// unbind the keydown action to prevent repeats
						$(document).off('keydown');
						// bind it again after 450 milliseconds to allow for run animation to complete
						setTimeout(function() { Engine.bill.move(); }, 150);

					}
					// the letter 'A' is pressed (the left direction)
					else if(keyCode === "65"){
						$( '.Bill div' ).each(function() {
							var original = parseInt($(this).css("left"), radix);
						  	$(this).css("left", original - bill);
						});

						// unbind the keydown action to prevent repeats
						$(document).off('keydown');
						// bind it again after 450 milliseconds to allow for run animation to complete
						setTimeout(function() { Engine.bill.move(); }, 150);

					}
				});
			}
		}
	};

	Engine.bill.init();
	Engine.bill.move();

});