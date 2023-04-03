// check if user is a guest
exports.isGuest = (req, res, next) => 
{
    if (!req.session.user)
    {
        return next();
    }
    else
    {
        req.flash("error", "You're already logged in.");
        return res.redirect("/users/profile");
    }
}

// check if user is logged in
exports.isLoggedIn = (req, res, next) =>
{
    if (req.session.user)
    {
        return next();
    }
    else
    {
        req.flash("error", "You're already logged in.");
        return res.redirect("/users/login");
    }
}
