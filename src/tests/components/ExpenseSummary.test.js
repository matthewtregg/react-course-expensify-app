import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseSummary} from '../../components/ExpenseSummary'

test ('should correctly render Expenses summary with one expenses', () => { 
const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={235} />)
expect(wrapper).toMatchSnapshot()
} )

test ('should correctly render Expenses summary with more than one expense', ()=>{ 
const wrapper = shallow(<ExpenseSummary expenseCount={5} expenseTotal={545} />)
expect(wrapper).toMatchSnapshot()

    
} )