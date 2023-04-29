import {
    loginFailure,
    loginStart,
    loginSuccess,
    logout,
    loginData,
    loginToken,
} from './userRedux';
import { generalRequest } from 'http/httpService';
import jwt_decode from 'jwt-decode';

// Login is a great example of a function that dispatches multiple actions to update the global state
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        // LOCAL:
        // const res = await axios.post('http://localhost:8080/api/auth/signin', user);
        // PROD:
        const res = await generalRequest.post('/auth/signin', user);
        localStorage.setItem('user', JSON.stringify(res.data.accessToken));
        localStorage.setItem('username', JSON.stringify(res.data.username));
        localStorage.setItem('userData', JSON.stringify(res.data));
        const TOKEN = JSON.parse(localStorage.getItem('user'));
        const decoded = jwt_decode(TOKEN);
        if (decoded) {
            dispatch(loginToken(TOKEN));
            dispatch(loginData(res.data));
            dispatch(loginSuccess(decoded));
            setTimeout(function () {
                // localStorage.removeItem('idx');
                // localStorage.removeItem('ids');
                // localStorage.removeItem('user');
                // localStorage.removeItem('username');
                // localStorage.removeItem('userData');
                window.location.pathname = '/email/inbox';
            }, 3000);
        }

    } catch (err) {
        dispatch(loginFailure(), logout());
    }
};
