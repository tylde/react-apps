const initialData = {
  '1516185160000': {
    id: '1516185160000',
    date: '01.01.2017',
    timestamp: 1517439600000,
    type: '+',
    name: 'Base',
    quantity: 1,
    price: 7895
  },
  '1516185165000': {
    id: '1516185165000',
    date: '10.01.2017',
    timestamp: 1518217200000,
    type: '-',
    name: 'Expense 1',
    quantity: 6,
    price: 3.49
  },
  '1516185165800': {
    id: '1516185165800',
    date: '07.01.2017',
    timestamp: 1517958000000,
    type: '+',
    name: 'Salary',
    quantity: 1,
    price: 1000
  },
  '1516185165892': {
    id: '1516185165892',
    date: '03.01.2017',
    timestamp: 1517612400000,
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