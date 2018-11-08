import React from 'react'; 
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense;
let removeExpense;
let history;
let wrapper;

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense= jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[0]}/>)

})

test('should render the EditExpensePage correctly', () => {  
expect(wrapper).toMatchSnapshot()
})

test('should handle the edit expense correctly', () => {  
wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
expect(history.push).toHaveBeenLastCalledWith('/')
expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[1])

})


test('should handle the remove expense correctly', () => {  

wrapper.find('button').simulate('click')
expect(history.push).toHaveBeenLastCalledWith('/')
expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[0].id})
})

// should handle the edit expense
// spies

// should handle the remove expense
// spies
