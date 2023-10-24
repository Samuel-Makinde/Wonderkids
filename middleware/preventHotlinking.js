const preventHotLinking = (allowedDomains) => {
    return (req, res, next) => {
        const referer = req.get('referer');

        if (!referer || !allowedDomains.some(domain => referer.includes(domain))) {
            return res.status(403).json({ error: 'Forbidden' });
        }

        next();
    };
};

module.exports = preventHotLinking