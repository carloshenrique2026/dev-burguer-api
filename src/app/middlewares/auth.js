import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth.js';

const authMiddleware = (request, response, next) => {
    console.log('HEADER:', request.headers.authorization);
    const authHeader = request.headers.authorization;
    
    if(!authHeader) {
        return response.status(401).json({ error: 'Token not provided' });
    }

    const [,token ] = authHeader.split(' ');

    try {
        const decoded = jwt.verify(token, authConfig.secret);

        request.userId = decoded.id;
        request.userName = decoded.name;
        request.userIsAdmin = decoded.admin;
        
    } catch (error) {
        
        return response.status(401).json({ error: 'Token is invalid' });
    }
    
    return next();
};

export default authMiddleware;