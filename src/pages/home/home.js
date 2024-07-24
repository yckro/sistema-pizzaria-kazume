function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../../../../index.html";
    }).catch(() => {
        alert('Erro ao fazer logout');
    })
}

const fakeTransactions = [{
    type: 'expense',
    date: '2022-01-04',
    money: {
        currency: 'R$',
        value: 10
    },
    transactionTape: 'supermercado'
}, {
    type: 'expense',
    date: '2022-01-09',
    money: {
        currency: 'R$',
        value: 1000
    },
    transactionTape: 'salário'
}, {
    type: 'expense',
    date: '2022-01-05',
    money: {
        currency: 'R$',
        value: 109
    },
    transactionTape:'supermercado'
}, {
    type: 'expense',
    date: '2022-01-06',
    money: {
        currency: 'R$',
        value: 108
    },
    transactionTape:'supermercado'
}]
