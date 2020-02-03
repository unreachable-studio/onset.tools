import jwt_decode from 'jwt-decode';
import cookie from 'react-cookies';

const getCurrentProfile = () => {
	try {
		return jwt_decode(cookie.load('token'))
	}
	catch(error) {
		return null;
	}
}

export { getCurrentProfile };
