const todoKey = "todo-list";

export const getLocalStorageTodoData = () => {
  const rawTodo = localStorage.getItem(todoKey);
  if (!rawTodo) return [];
  return JSON.parse(rawTodo);
};
export const setLocalStorageTodoData = (task) => {
  // Todo add data to local storage
  localStorage.setItem(todoKey, JSON.stringify(task));
};
