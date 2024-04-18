function createAccount(pin, amount = 0) {
    return{ 
        checkBalance(inputPin){
            if(inputPin === pin){
                return `$${amount}`;
            };
            return "Invalid PIN."; 
        },
        deposit(inputPin, amt){
            if(inputPin === pin){
                amount += amt;
                return `Succesfully deposited $${amt}. Current balance: $${amount}.`;
            };
            return "Invalid PIN.";
        },
        withdraw(inputPin, amt){
            if(inputPin === pin){
                if(amt > amount) {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled.";
                };
                amount -= amt;
                return `Succesfully withdrew $${amt}. Current balance: $${amount}.`;
            };
            return "Invalid PIN.";
        },
        changePin(inputPin, newPin){
            if(inputPin !== pin) return "Invalid PIN.";
            pin = newPin;
            return `PIN successfully changed!`;
        }

    }
}


module.exports = { createAccount };
