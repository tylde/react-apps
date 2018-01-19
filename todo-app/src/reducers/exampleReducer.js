const initialData = 'Boilerplate for react-redux applications with testing.';

export default function (state = initialData, action) {
  let { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}