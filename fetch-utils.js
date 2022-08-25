const BASE_URL = 'https://do-or-die.herokuapp.com';

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

export async function signInUser(userInfo) {
    const res = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
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

export async function checkUser() {
    const user = await getUser();
    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    const user = await getUser();
    if (user) {
        location.replace('./tasks');
    }
}

export async function logoutUser() {
    const resp = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
        method: 'DELETE',
        credentials: 'include',
    });
    if (resp.ok) {
        location.replace('../');
    }
}

export async function addNewTask(taskInfo) {
    const res = await fetch(`${BASE_URL}/api/v1/tasks`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskInfo),
        credentials: 'include',
    });

    const data = await res.json();
    if (res.ok) {
        return data;
    }
}

export async function getTasks() {
    const res = await fetch(`${BASE_URL}/api/v1/tasks`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });

    const data = await res.json();
    if (res.ok) {
        return data;
    }
}

export async function completeTasks(id, completed) {
    const res = await fetch(`${BASE_URL}/api/v1/tasks/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(completed),
        credentials: 'include',
    });

    const data = await res.json();
    if (res.ok) {
        return data;
    }
}

export async function deleteTasks(id) {
    const res = await fetch(`${BASE_URL}/api/v1/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });

    const data = await res.json();
    if (res.ok) {
        return data;
    }
}
