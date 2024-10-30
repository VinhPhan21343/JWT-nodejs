const handleViewHome = (req, res) => {
    // const name = "Vinh";
    return res.render("Home.ejs");//{ name }

}
const handleViewUser = (req, res) => {
    return res.render("User.ejs");

}

module.exports = {
    handleViewHome, handleViewUser
}