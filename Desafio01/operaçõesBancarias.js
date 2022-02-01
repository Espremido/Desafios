const user = {
  name: 'Murilo Andrade',
  transactions: [],
  balance: 0
}

//Adicionando transações
function createTransaction(type, value) {
  if (type == 'credit') {
    const transaction = {
      type1: type,
      value1: value
    }
    user.transactions.push(transaction)
    user.balance = user.balance + transaction.value1s
  } else if (type == 'debit') {
    const transaction = {
      type1: type,
      value1: value
    }
    user.transactions.push(transaction)
    user.balance = user.balance - transaction.value1
  }

  console.log(user.transactions)
}

//Relatórios
