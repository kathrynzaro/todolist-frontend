const BASE_URL = 'http://localhost:7890';

export async function signUpUser(userInfo) {
    const res = await fetch(`${BASE_URL}/api/v1/users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
        credentials: 'include',
    });

    const data = await res.json();
    if (res.ok) {
        location.replace('./tasks');
    } else {
        // eslint-disable-next-line no-console
        console.error(data.message);
    }
}

export async function getUser() {
    const resp = await fetch(`${BASE_URL}/api/v1/users/me`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    if (resp.ok) {
        const user = await resp.json();
        return user;
    }
}

export async function redirectIfLoggedIn() {
    const user = await getUser();
    if (user) {
        location.replace('./tasks');
    }
}
