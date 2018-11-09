import moment from 'moment';

// Get visible expenses

export default (expenses) => {
    if (expenses.length>0){
    const expensesamount = expenses.map((expense) => {return expense.amount})
    const expensestotal = expensesamount.reduce((expense,accumulator) => {return expense 
    +accumulator},0)
    return expensestotal
}  
 else if (expenses.length===0){
    return 0
}
    
    
  }
