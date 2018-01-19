const initialData = 'FILTER_BY_ALL';

export default function (state = initialData, action) {
  let { type, payload } = action;
  console.log(type);
  switch (type) {
    default:
      return state;
  }
}