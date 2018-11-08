import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters,altfilters} from '../fixtures/filters'
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=> {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters
        filters = {filters}
        setTextFilter = {setTextFilter}
        sortByDate = {sortByDate}
        sortByAmount = {sortByAmount}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
        />)

})

test('should render expense list filters correct', () =>{

expect(wrapper).toMatchSnapshot()

})


test('should render expenselist filters with alt data correctly', () =>{
    wrapper.setProps({
        filters: altfilters
    })
    expect(wrapper).toMatchSnapshot()
    
    })

// should handle text change
test('should handle text change', () =>{
    const value = 'rent'
    wrapper.find('input').simulate('change',{
        target: {value}  
})
expect(setTextFilter).toHaveBeenLastCalledWith(value)

})


test('should sort by date', () =>{
    const value = 'date'
    wrapper.setProps({
        filters: altfilters
    })
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByDate).toHaveBeenCalled()
})    


test('should sort by amount', () =>{
    const value = 'amount'
    wrapper.setProps({
        filters: altfilters
    })
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByAmount).toHaveBeenCalled()
}) 


test('should handle date changes', () =>{
    const startDate = moment(0).add(4,'years')
    const endDate = moment(0).add(8,'years')
   
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
}) 


test('should handle date focus changes', () =>{
    const calendarFocused = 'endDate';
    
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)

    // expect(setStartDate).toHaveBeenLastCalledWith(altfilters.startDate)
    // expect(setEndDate).toHaveBeenLastCalledWith(altfilters.endDate)
    // expect(sortByDate).toHaveBeenLastCalledWith()
}) 
// should sort by date
// should sort by amount
// should handle date changes
// should handle date focus changes