const jwt = require('jsonwebtoken');

// Generate a JWT token
const generateToken = (payload, secretKey, expiresIn) => {
  return jwt.sign(payload, secretKey, { expiresIn });
};

// Example usage
/* const payload = { userId: 123456, username: 'john.doe' };
const secretKey = 'mySecretKey';
const expiresIn = '1h'; // Token expiration time, e.g., 1 hour*/

const token = generateToken(payload, secretKey, expiresIn);
console.log('Generated Token:', token);
