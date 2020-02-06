import jwt_decode from 'jwt-decode';
import cookie from 'react-cookies';

const getCurrentProfile = () => {
	try {
		return jwt_decode(cookie.load('token')).user;
	}
	catch(error) {
		return null;
	}
}

export { getCurrentProfile };
