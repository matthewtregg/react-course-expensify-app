// create expenses-total.js and expenses-total.test.js
import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

let total = selectExpensesTotal(expenses)
console.log(total)

test('should return 0 if no expenses', () => {
total = selectExpensesTotal([])
expect(total).toBe(0)
})

test('should correctly add up a single expense', () => {
    total = selectExpensesTotal([expenses[0]])
    expect(total).toBe(195)
})
    
test('should correctly add up multiple expenses', () => {
    total = selectExpensesTotal(expenses)
    expect(total).toBe(114195)
})