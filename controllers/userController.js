const home = (req,res)=>{
    res.render('pages/index')
};
const about = (req,res)=>{
    res.render('pages/about')

};
const courses = (req,res)=>{
    res.render('pages/courses')

};
const trainers = (req,res)=>{
    res.render('pages/trainers')

};
const events = (req,res)=>{
    res.render('pages/events')

};
const pricing = (req,res)=>{
    res.render('pages/pricing')

};
const contact = (req,res)=>{
    res.render('pages/contact')

};


module.exports = {
    home,
    about,
    courses,
    contact,
    pricing,
    trainers,
    events
}