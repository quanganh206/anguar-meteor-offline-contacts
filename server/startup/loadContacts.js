Meteor.startup(function () {
  // default 
  if (Contacts.find().count() === 0) {
  	var contacts = [
  		{'name': 'Quang Anh LE', 'email': 'quanganh@aiti.com.vn'}
  	];
  	for (var i = 0; i < contacts.length; i++)
      Contacts.insert({name: contacts[i].name, email: contacts[i].email});
  }
});
