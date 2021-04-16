import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary correctly with 0 expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={0} expensesTotal={0} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={7} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with 3 expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={23} expensesTotal={9876} />
  );
  expect(wrapper).toMatchSnapshot();
});
