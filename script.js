
(function main(){
  let myAddressBook = [];
  let choice = 0;
  while(choice !== 3 ) {
    choice = showMenu();
    if(choice === 1) {
      addEntry(myAddressBook);
    } else if( choice === 2) {
      showEntries(myAddressBook);
    } else if ( choice === 3) {
      console.log('The application will close now.');
    } else {
      console.log('Ooops...looks like we have an invalid choice! Please try again.');
    }
  }
})();



function showMenu() {
  var choice;
  console.log('Address Book Demo:');
  console.log('1. Add new entry');
  console.log('2. Show all entries');
  console.log('3. Exit');
  choice = prompt('Enter your choice:');
  return parseInt(choice);
}

function addEntry(addressBook) {
  var firstName, lastName, phoneNumber;
  firstName = prompt("Enter first name:");
  lastName = prompt("Enter last name:");
  phoneNumber = prompt("Enter phone number:");
  addressBook.push({
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber
  });
}

function showEntries(addressBook) {
  console.log('*** Address Book Entries ***')
  for(let i = 0; i < addressBook.length; i++) {
    console.log((i+1) + '.\tName: ', addressBook[i].firstName, addressBook[i].lastName);
    console.log('\tPhone: ', addressBook[i].phoneNumber);
  }
}
