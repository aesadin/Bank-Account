function BankAccount(firstName, lastName, accountBalance) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.accountBalance = accountBalance;
}

BankAccount.prototype.deposit = function(addNumber) {
  return (accountBalance + addNumber);
}

BankAccount.prototype.withdraw = function(subtractNumber) {
  return (accountBalance - subtractNumber);
}

