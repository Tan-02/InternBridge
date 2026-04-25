const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'No token, access denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};

// Role check — usage: authorize('admin', 'faculty')
const authorize = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role))
    return res.status(403).json({ msg: 'Access forbidden for your role' });
  next();
};

module.exports = { protect, authorize };