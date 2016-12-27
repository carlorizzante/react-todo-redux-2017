const moment = require("moment");

// console.log(moment());
// console.log(moment().format());

const now = moment();
// console.log("Current timestamp", now.unix());

const timestamp = 1482787989;
const current = moment.unix(timestamp);
// console.log("Current moment", current.format("Do MMMM YYYY @ h:mma"));
// console.log("Current moment", current.format("MMMM Do, YYYY @ h:mm A"));

console.log(moment.unix(timestamp).format("Do MMM YYYY @ h:mm a"));
