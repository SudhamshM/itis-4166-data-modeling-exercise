// check if user is a guest or logged in before proceeding
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