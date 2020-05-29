import jwt from 'jsonwebtoken';

export const createAuthToken = async (payload) => {
    try {
        const options = {
            algoritm: 'HS512',
            expiresIn: process.env.JWT_AUTH_EXPIRE_TIME
        };
        
        const token = await jwt.sign(payload, process.env.JWT_AUTH_SECRET, options);

        return token;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const verifyAuthToken = (token) => {
    try {
    const data = jwt.verify(token, process.env.JWT_AUTH_SECRET);

    return data;
} catch (error) {
    throw new Error(error.message);
}
}

