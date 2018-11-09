import React from 'react'
import {connect} from 'react-redux'
import selectExpenses from '../selectors/expenses'
import getTotalExpenses from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpenseSummary = ({count, total}) => {
const finaltotal = numeral(total/100).format('$0,0.00')

return (
<div>
 {count>1? <p> `viewing {count} expenses totalling {finaltotal}`</p> :
  <p> `viewing {count} expense totalling {finaltotal}`</p> }
</div>
)
}

const mapStateToProps = (state) => {
    
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return ({
       count: visibleExpenses.length,
       total: getTotalExpenses(visibleExpenses)
    })

}






export default connect(mapStateToProps) (ExpenseSummary)