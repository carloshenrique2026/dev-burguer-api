import jwt from 'jsonwebtoken';
import authConfig from './../config/auth.js';

const authMiddleware = (request, response, next) => {
    const authHeader = request.headers.authorization;
    
    if(!authHeader) {
        return response.status(401).json({ error: 'Token not provided' });
    }

    const [,token ] = authHeader.split(' ');

    try {
        const decoded = jwt.verify(token, authConfig.secret);

        

        request.userId = decoded.id;
        
    } catch (error) {
        
        return response.status(401).json({ error: 'Token is invalid' });
    }
    
    return next();
};

export default authMiddleware;