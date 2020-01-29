const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/calendar', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const schema = require('./schema.js')
const dateSchema = new mongoose.Schema({
  exp_id: Number,
  dates: {}
});
var Calendar = mongoose.model('D', dateSchema);

var get = (exp_id,cb1,cb2) => {
  Calendar.find({exp_id: exp_id}).exec((err,data) => {
    if (err) {
      cb1();
    } else {
      cb2(data);
    }
  })
}



var update = (exp_id, year, month, day, timeslot, cb1,cb2) => {
  calendar.find({exp_id: exp_id})
  .exec((err,data) => {
    if (err) {
      cb1();
    } else {
      data[0].dates[year][month][day][timeslot] = false;
      calendar.updateOne({exp_id: exp_id}, {dates: data[0].dates}, (err,dat) => {
        if (err) {
          cb1();
        } else {
          console.log(dat);
          cb2();
        }
      });
    }
  });
}

//update(2, 2020,1,1,'morning');


module.exports.get = get;
module.exports.update = update;
