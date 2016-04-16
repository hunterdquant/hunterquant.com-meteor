Template.contact.events({
  'click .sendButton': function(e) {
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    Meteor.call('sendEmail',
      '',
      email.textContent,
      '',
      message.textContent);
  }
});
