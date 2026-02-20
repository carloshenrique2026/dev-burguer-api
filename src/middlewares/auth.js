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
        console.log(decoded)
        return next();
        
    } catch (error) {
        
        return response.status(401).json({ error: 'Token inválido ou expirado' });
    }
};

export default authMiddleware;