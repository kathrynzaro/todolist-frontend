import { signUpUser } from './fetch-utils';

const signUpForm = document.getElementById('sign-up');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    const data = await signUpUser({
        email: formData.get('email'),
        password: formData.get('password'),
        firstName: formData.get('first-name'),
        lastName: formData.get('last-name'),
    });
});
