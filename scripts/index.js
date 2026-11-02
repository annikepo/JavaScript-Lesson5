// Step 1: Create the account object using 'const'
const account = {
  accountName: "Betty Na",
  balance: 899.99,

  // Method to print current balance in the console
  getBalance: function () {
    console.log(`Your current balance is: $${this.balance}`);
  },

  // Method to deposit money
  deposit: function (amount) {
    if (isNaN(amount) || amount <= 0) {
      this.accountError("Invalid deposit amount. Please enter a positive number.");
    } else {
      this.balance += amount;
      console.log(`Successfully deposited $${amount}. New balance: $${this.balance}`);
    }
  },

  // Method to withdraw money
  withdrawal: function (amount) {
    if (isNaN(amount) || amount <= 0) {
      this.accountError("Invalid withdrawal amount. Please enter a valid positive number.");
    } else if (amount > this.balance) {
      this.accountError("Insufficient funds for this withdrawal.");
    } else {
      this.balance -= amount;
      console.log(`Successfully withdrew $${amount}. Remaining balance: $${this.balance}`);
    }
  },

  // Method to display account name in the console
  getAccountName: function () {
    console.log(`Account Holder: ${this.accountName}`);
  },

  // EXTRA: Exit method
  exitAccount: function () {
    console.log("Thank you for using our ATM. Goodbye!");
  },

  // EXTRA: Error handling method (uses console.error to highlight in red)
  accountError: function (errorMessage) {
    console.error(`Account Error: ${errorMessage || "An unexpected error occurred."}`);
  }
};

// Step 2: ATM interface function
function atm() {
  const message = parseFloat(
    prompt(
      "Select a choice:\n1.) See balance\n2.) Make a deposit\n3.) Make a withdrawal\n4.) Get account name\n5.) Exit"
    )
  );

  switch (message) {
    case 1:
      account.getBalance();
      break;

    case 2:
      const depositAmount = parseFloat(prompt("Enter amount to deposit:"));
      account.deposit(depositAmount);
      break;

    case 3:
      const withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
      account.withdrawal(withdrawAmount);
      break;

    case 4:
      account.getAccountName();
      break;

    case 5:
      account.exitAccount();
      break;

    default:
      account.accountError("Invalid choice! Please select a valid menu option (1-5).");
      break;
  }
}

// Run the ATM function
atm();