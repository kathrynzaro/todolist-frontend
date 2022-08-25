import { redirectIfLoggedIn, signUpUser, signInUser } from './fetch-utils.js';

const signUpForm = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    await signUpUser({
        email: formData.get('email'),
        password: formData.get('password'),
        firstName: formData.get('first-name'),
        lastName: formData.get('last-name'),
    });
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signInForm);
    await signInUser({
        email: formData.get('email'),
        password: formData.get('password'),
    });
});

redirectIfLoggedIn();
