const initialData = {
  byHash: {
    0: {
      id: 0,
      priority: 2,
      text: 'Create todo application',
      done: false
    },
    1: {
      id: 1,
      priority: 4,
      text: 'Do something',
      done: false
    },
    2: {
      id: 2,
      priority: 4,
      text: 'Learn GraphQL',
      done: false
    },
    3: {
      id: 3,
      priority: 1,
      text: 'Todo',
      done: false
    },
    4: {
      id: 4,
      priority: 3,
      text: 'Very very long description for this todo',
      done: false
    },
    5: {
      id: 5,
      priority: 5,
      text: 'I have no idea what I am writing',
      done: false
    }
  },
  byId: [0, 1, 2, 3, 4, 5]
};

export default function (state = initialData, action) {
  let { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};