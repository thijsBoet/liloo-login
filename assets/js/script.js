const loginContainer = document.querySelector('#loginContainer');
const signupContainer = document.querySelector('#signupContainer');
const signUpNowBtn = document.querySelector('#signUpNowBtn');
const loginNowBtn = document.querySelector('#loginNowBtn');


signupContainer.style.display = 'none';

toggleContainer = () => {
		if (loginContainer.style.display === 'none') {
		loginContainer.style.display = 'block';
		signupContainer.style.display = 'none';
		} else {
		loginContainer.style.display = 'none';
		signupContainer.style.display = 'block';
	}
}

signUpNowBtn.addEventListener('click', toggleContainer);
loginNowBtn.addEventListener('click', toggleContainer);