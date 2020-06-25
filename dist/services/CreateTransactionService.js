"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateTransactionService = /** @class */ (function () {
    function CreateTransactionService(transactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }
    CreateTransactionService.prototype.execute = function (_a) {
        var title = _a.title, type = _a.type, value = _a.value;
        var balance = this.transactionsRepository.getBalance();
        if (type === 'outcome' && value + balance.outcome >= balance.income) {
            throw Error('Value of outcome transaction should be valid balance');
        }
        var transaction = this.transactionsRepository.create({
            title: title,
            type: type,
            value: value,
        });
        return transaction;
    };
    return CreateTransactionService;
}());
exports.default = CreateTransactionService;
