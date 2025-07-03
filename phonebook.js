// This is a simple phone book application that allows adding, updating, deleting, and sorting contacts.
class Contact {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}

// Main phone book class
class PhoneBook {
  constructor() {
    // Array to store contacts
    this.entries = [];
  }

  // Add a new contact — O(1)
  addContact(name, phone) {
    this.entries.push(new Contact(name, phone));
  }

  // Update contact by name — O(n)
  updateContact(name, newPhone) {
    const contact = this.entries.find((c) => c.name === name);
    if (contact) {
      contact.phone = newPhone;
    } else {
      console.log(`Contact '${name}' not found.`);
    }
  }

  // Delete contact by name — O(n)
  deleteContact(name) {
    this.entries = this.entries.filter((c) => c.name !== name);
  }

  // Use built-in sort by name — O(n log n)
  sortByName() {
    return [...this.entries].sort((a, b) => a.name.localeCompare(b.name));
  }

  // Use built-in sort by phone — O(n log n)
  sortByPhone() {
    return [...this.entries].sort((a, b) => a.phone.localeCompare(b.phone));
  }

  // Manual bubble sort by name — O(n^2)
  bubbleSortByName() {
    const arr = [...this.entries];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j].name.localeCompare(arr[j + 1].name) > 0) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }

  // Display entries (defaults to unsorted) — O(n)
  printEntries(entries = this.entries) {
    entries.forEach((c) => console.log(`${c.name} - ${c.phone}`));
  }
}

// Demonstration of the PhoneBook class functionality

// Create phone book instance
const myPhoneBook = new PhoneBook();

// Add sample contacts
myPhoneBook.addContact("Alice", "123-456-7890");
myPhoneBook.addContact("Charlie", "555-555-5555");
myPhoneBook.addContact("Bob", "111-111-1111");

// Show original
console.log("\n📋 Original:");
myPhoneBook.printEntries();

// Update Alice's number
myPhoneBook.updateContact("Alice", "411-444-3466");
console.log("\n🔄 Updated Alice's number");

// Delete Charlie
myPhoneBook.deleteContact("Charlie");
console.log("\n❌Deleted Charlie's contact:");

// Sort using built-in
console.log("\n🔤 Sorted by name (built-in):");
myPhoneBook.printEntries(myPhoneBook.sortByName());

console.log("\n📞 Sorted by phone (built-in):");
myPhoneBook.printEntries(myPhoneBook.sortByPhone());

// Sort using manual bubble sort
console.log("\n🫧 Sorted by name (bubble sort):");
myPhoneBook.printEntries(myPhoneBook.bubbleSortByName());

console.log("\n📋 Unsorted entries:");
myPhoneBook.printEntries(); // Print unsorted entries
