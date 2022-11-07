$(document).ready(function () {
	'use strict';

	let usrName = '';
	let pwdStrng = '';
	var attmptCnt = 0;

	// hide elements
	$('.message').hide();

	// generate access cridentials
	function genLogin() {
		// console.log('gen login');

		console.clear();

		const usrList = ['admin', 'user', 'Mike', 'Andy', 'Jeff', 'Tina', 'Crystal', 'Vicki'];
		const chrSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()[]{}\|_+-=,.~';";
		let pwdLen = 6;
		// let pwdStrng = '';

		// select randam name from userlist
		let rndmNmb = Math.random() * usrList.length;
		let rndmIndx = rndmNmb.toFixed();
		usrName = usrList[rndmIndx];

		// loop through character set concacnate password string
		for (let i = 0; i < pwdLen; i++) {
			// randomly select characters
			let rndmNmb = Math.random() * chrSet.length;
			let rndmIndx = rndmNmb.toFixed();

			// concacnate password string
			pwdStrng += chrSet[rndmIndx];
		}

		console.log(usrName);
		console.log(pwdStrng);

	}

	// onload
	genLogin();

	// event listener
	$('#submit').click(function(event) {
		event.preventDefault(); 
		// console.log('submit');
		
		let genUsr = usrName;
		let genPwd = pwdStrng;

		let inptUsr = $('#username').val();
		let inptPwd = $('#password').val();

		// console.log(usrName);
		// console.log(pwdStrng);

		// do credentials from both generator and visitor match
		if (genUsr === inptUsr && genPwd === inptPwd) {
			// console.log('granted');
			
			// hide login form
			$('.login>form').hide();
			
			// show message row
			$('.message').show();

			// apply granted page
			$('.message').html(
				`<div class="granted-frame" id="granted">
					<div class="img" alt="some picture"></div>
					<button type="button" class="btn btn-info" id="logout">Log Out</button>
				</div>`
			);
		} else {
			// console.log('Denied');

			
			// hide login form
			$('.login>form').hide();
			
			// show message row
			$('.message').show();
			
			// display msg page
			$('.message').html(
				`<div class="denied-frame" id="denied">
					<p>Incorrect Password or Username</p>
					<button type="button" class="btn btn-info" id="login">Try Again</button>
				</div>`
			);
		}

		// submission failed try again
		$('#login').click(function(){
			// console.log('re generate');

			// help hint
			if(attmptCnt++ === 1) {
				console.log('attmepts reached');
				
				// clear counter
				attmptCnt = 0;

				alert('Hint: Every developer needs a little consoling now and then.');

			}

			// empty objects in message
			$('.message').html('');

			// hide message div
			$('.message').hide();

			// show login form
			$('.login>form').show();

			// empty cridentials ???
			usrName = '';
			pwdStrng = '';

			// trigger login generater
			genLogin();
		});

		// log out of access view
		$('#logout').click(function(){
			// console.log('log out');

			// empty objects in message
			$('.message').html('');

			// hide message div
			$('.message').hide();

			// show login form
			$('.login>form').show();

			// empty cridentials ???
			usrName = '';
			pwdStrng = '';

			// trigger login generater
			genLogin();
		});
		
	});

});
