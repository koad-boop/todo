const todoKey = "reactTodo";

export const getLocalStoregeData = () => {
  const rawTodos = localStorage.getItem(todoKey);
  if (!rawTodos) return [];
  return JSON.parse(rawTodos);
};

export const settLocalStoregeData = (task) => {
   return localStorage.setItem(todoKey ,JSON.stringify(task));
  };