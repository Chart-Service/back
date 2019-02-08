require('dotenv').config();
const app = require('./config/express')();
const passport = require('./config/passport')(app);
const auth = require('./routes/auth')(passport);
app.use('/auth/', auth);

var topic = require('./routes/topic')();
app.use('/topic', topic);

app.listen(3000, ()=>{
    console.log('Connected 3000 port!!!');
});