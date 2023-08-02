export const getLocalStorageValue = () => {
    const values: { [key: string]: string } = {};

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
            const value = localStorage.getItem(key);
            if (value !== null) {
                values[key] = value;
            }
        }
    }

    return values;
};

export const getAllCookies = (): { [key: string]: string } => {
    const cookies: { [key: string]: string } = {};

    const cookieString = document.cookie;
    const cookieArray = cookieString.split(';');

    for (const cookie of cookieArray) {
        const [key, value] = cookie.trim().split('=');
        cookies[key] = decodeURIComponent(value);
    }

    return cookies;
};

export const getStores = () => {
    const localStorageValue = getLocalStorageValue();
    const cookieValue = getAllCookies();

    console.log('LocalStorage 값:', localStorageValue);
    console.log('쿠키 값:', cookieValue);
};

export const clearStores = () => {
    localStorage.clear();

    // // Clear all cookies
    // const cookies = document.cookie.split(";");

    // for (const cookie of cookies) {
    //     const cookieParts = cookie.split("=");
    //     const cookieName = cookieParts[0].trim();
    //     document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    // }
};


