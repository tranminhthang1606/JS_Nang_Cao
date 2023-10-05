const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};
const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
 
};
const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  
};
const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  
};

const accounts = [account1, account2, account3, account4];

let trading_tab_left = document.querySelector(".trading_tab_left");

const displayMovements = (movements) => {
  movements.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const color = mov > 0 ? "success" : "danger";

    const html = `
    <div class="checkout_item d-flex justify-content-between w-md-75 bg-white p-3 pt-4 pb-4">
      <div class="checkout_info bg-${color} p-2 rounded text-light fw-bold ">${
      i + 1
    } ${type}</div>
      <div class="checkout_value bg-white fw-bold fs-5">${mov}$</div>
    </div>
  `;
    trading_tab_left.insertAdjacentHTML("afterbegin", html);
  });
};


let labelBalance = document.querySelector(".label-balance");
const calcDisplayBalance = (acc) =>{
acc.balance = acc.movements.reduce((acc,mov)=>{
    return acc+mov
},0);

labelBalance.textContent = `${acc.balance}$`

}



let labelSumIn = document.querySelector(".in");
let labelSumOut = document.querySelector(".out");
let labelSumInterest = document.querySelector(".interest")
const calcDisplaySummary = (acc)=>{
    const incomes = acc.movements.filter(mov=>mov>0).reduce((acc,mov)=>acc+mov,0);
    labelSumIn.textContent = `${incomes}$`;
    const out = acc.movements
      .filter((mov) => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent=`${Math.abs(out)}$`;
    const interest = acc.movements
      .filter((mov) => mov > 0)
      .map((deposit) => (deposit * acc.interestRate) / 100)
      .filter((int, i, arr) => {
        return int >= 1;
      })
      .reduce((acc, int) => acc + int, 0);
      labelSumInterest.textContent=`${interest}$`;
}

const createUsernames = (accs)=>{
accs.forEach((acc)=>{
    acc.username=acc.owner.toLowerCase().split(' ').map(name=>name[0]).join('')
})
}

createUsernames(accounts);

let updateUI = (currentAccount)=>{
displayMovements(currentAccount.movements);
calcDisplayBalance(currentAccount);
calcDisplaySummary(currentAccount);
}

let btnLogin = document.querySelector(".btn-login");
console.log(btnLogin)
let currentAccount;
let inputLoginUsername = document.querySelector(".user");
let inputLoginPin = document.querySelector(".pin");
let labelWelcome = document.querySelector(".label_welcome");
let containerApp = document.querySelector(".container_app")


btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    // Update UI
    updateUI(currentAccount);
  }
});





let inputTransferTo = document.querySelector(".transfer_to");
let inputTransferAmount = document.querySelector(".transfer_amount");
let btnTransfer = document.querySelector(".btn-transfer");
console.log(currentAccount)
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
});

// 


const bankDepositSum = accounts
 .flatMap(acc => acc.movements)
 .filter(mov => mov > 0)
 .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);
// 2.
// const numDeposits1000 = accounts
// .flatMap(acc => acc.movements)
// .filter(mov => mov >= 1000).length;
const numDeposits1000 = accounts
 .flatMap(acc => acc.movements)
 .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);
// Prefixed ++ oeprator
let a = 10;
console.log(++a);
console.log(a);
// 3.
const { deposits, withdrawals } = accounts
 .flatMap(acc => acc.movements)
 .reduce(
 (sums, cur) => {
 // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
 sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
 return sums;
 },
 { deposits: 0, withdrawals: 0 }
 );
console.log(deposits, withdrawals);
// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
 const capitzalize = str => str[0].toUpperCase() + str.slice(1);
 const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 
'with'];
 const titleCase = title
 .toLowerCase()
 .split(' ')
 .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
 .join(' ');
 return capitzalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));