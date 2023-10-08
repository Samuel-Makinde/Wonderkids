const preventHotLinking = (allowedDomain) => {
    return (req, res, next) => {
        const referer = req.get('referer');

        // Check if referer header is missing or doesn't match your domain
        if (!referer || !referer.includes(allowedDomain)) {
            return res.status(403).json({ error: 'Forbidden' });
        }

        next();
    };
};

module.exports = preventHotLinking