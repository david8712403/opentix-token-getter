const { fetch: origFetch } = window;
window.fetch = async (...args) => {
    const response = await origFetch(...args);
    response
        .clone()
        .json()
        .then(data => {
            if (data.AuthenticationResult && data.AuthenticationResult.RefreshToken) {
                window.postMessage({ type: 'refreshToken', data: data.AuthenticationResult.RefreshToken }, '*');
            }
        })
        .catch(err => console.error(err));
    return response;
};