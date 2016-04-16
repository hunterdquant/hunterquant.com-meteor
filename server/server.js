import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    this.unblock();

    Email.send({
      to: "hunterdquant@gmail.com",
      from: from,
      subject: "Contacted by " + from,
      text: text
    });
  }
});
