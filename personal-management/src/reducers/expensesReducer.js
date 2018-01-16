const initialData = {
  '0': {
    id: '0',
    date: '01.01',
    type: '+',
    name: 'Base',
    quantity: 1,
    price: 7895
  },
  '1': {
    id: '1',
    date: '01.01',
    type: '-',
    name: 'Expense 1',
    quantity: 6,
    price: 3.49
  },
  '2': {
    id: '2',
    date: '01.01',
    type: '+',
    name: 'Salary',
    quantity: 1,
    price: 1000
  },
  '3': {
    id: '3',
    date: '01.01',
    type: '-',
    name: 'Expense 2',
    quantity: 3,
    price: 6.99
  }
}

export default function (state = initialData, action) {
  let { type, payload } = action;
  switch (type) {
    default:
      return state;
  }

}