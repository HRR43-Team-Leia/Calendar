const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/calendar', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const dateSchema = new mongoose.Schema({
  exp_id: Number,
  dates: {}
});

var dateInCalendar = mongoose.model('D', dateSchema);
//Do not forget that we need to create calendar for each experience

//get number of days in current month and create a random calendar for the next 6 months
var today = new Date;

//Created seed for the next 6 months
const seed = (today) => {
  let result = {};

  let month = today.getMonth(); //1
  let year = today.getFullYear();//2020
  //debugger;
  result[year] = {};
  result[year][month] = {};
  //how many months in future to create
  for (let i = 0; i < 1; i++) {
    result[year][month] = {};
    let daysInMonth = new Date(year, month, 0).getDate();  //31
    for (let d = 1; d <= daysInMonth; d++ ) {
      // quazi-80% probability of date avalability
      if (Math.random() > 0.2) {
        result[year][month][d] = {};
        //populate morning and lunch time with 70% probability
        Math.random() > 0.1 ? result[year][month][d]['morning'] = true : result[year][month][d]['morning'] = false;
        Math.random() > 0.1 ? result[year][month][d]['lunch'] = true : result[year][month][d]['lunch'] = false;
      }
    }

    if (month === 11) {
      year += 1;
      month = 0;
      result[year] = {};
    } else {
      month ++;
    }
  }
  return result;
}
var counter = 1;

for (let i = 1; i <= 100; i++) {

  let calendar = new dateInCalendar({
    exp_id: i,
    dates : seed(today)
  });
  calendar.save((err)=>{
    if (err) {console.log(err)};
    counter ++;
    if (counter === 101) { mongoose.connection.close() }
  });

}

