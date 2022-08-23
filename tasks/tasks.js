import { checkUser, logoutUser } from '../fetch-utils.js';

checkUser();

const logout = document.getElementById('logout');

logout.addEventListener('click', async () => {
    await logoutUser();
});
