export const testTodo = (id) => {
  console.log('test:', id);
  return { type: 'TEST', payload: id }
};