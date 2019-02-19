let idArr = [];
const maxCard = 3;
const taxedCreditsPercent = 0.5;
const procentum = 100;
const minCard = 1;


function userCard(id) {
    const sliceBy = -2;

    let options = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: id
    };

    function addHistoryLog(operationType, credits) {
        options.historyLogs.push({
            operationType: operationType,
            credits: credits,
            operationTime: getTime()
        });
    }

    function getTime() {
        let date = new Date();
        return ('0' + date.getDate()).slice(sliceBy) + '/' + ('0' + (date.getMonth() + 1)).slice(sliceBy) + '/' +
            date.getFullYear() + ', ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    }

    function checkIfOperPoss(creditAmount) {
        if (options.balance < creditAmount) {
            console.error('Not enough funds on balance!');
            return false;
        } else if (options.transactionLimit < creditAmount) {
            console.error('The amount of credit exceed the transaction limit!');
            return false;
        } else {
            return true;
        }
    }

    function checkIndexInvalid(key) {
        if (key < minCard || key > maxCard || idArr.includes(key)) {
            console.error('Invalid index!');
            return true;
        } else {
            idArr.push(key);
            return false;
        }
    }

    if (checkIndexInvalid(id)) {
        return
    }

    return {
        getCardOptions: function () {
            console.log(options);
            return options;
        },
        putCredits: function (creditAmount) {
            if (isFinite(creditAmount) === true) {
                options.balance += parseInt(creditAmount);
                addHistoryLog('Received credits', creditAmount);
            } else {
                console.error('Wrong value')
            }
        },
        takeCredits: function (creditAmount) {
            if (checkIfOperPoss(creditAmount) && isFinite(creditAmount) === true) {
                options.balance -= parseInt(creditAmount);
                addHistoryLog('Withdrawal of credits', creditAmount);
            } else {
                console.error('Wrong value')
            }
        },

        setTransactionLimit: function (creditAmount) {
            if (isFinite(creditAmount) === true) {
                options.transactionLimit = parseInt(creditAmount);
                addHistoryLog('Transaction limit successfully changed', creditAmount);
            } else {
                console.error('Wrong value')
            }
        },
        transferCredits: function (creditAmount, card) {
            if (isFinite(creditAmount) === true) {
                card.putCredits(parseInt(creditAmount));
                this.takeCredits(creditAmount += creditAmount / procentum * taxedCreditsPercent);

            } else {
                console.error('Wrong value')
            }
        }
    }
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.addCard = function () {
            if (this.cards.length > maxCard) {
                console.error('User already has 3 cards!');
                return;
            }
            let newCard = userCard(this.cards.length + 1);
            this.cards.push(newCard);
        };
        this.getCardByKey = function (id) {
            return this.cards[id - 1];
        };
    }
}

// let user = new UserAccount('Vova');
// user.addCard()
// user.addCard()
// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);
// card1.putCredits(500);
// card1.setTransactionLimit(800);
// card1.transferCredits(300, card2);
// card2.takeCredits(50);
// card1.transferCredits(55, card2);
// card1.getCardOptions();
// card2.getCardOptions();


