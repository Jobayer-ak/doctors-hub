const useStorage = () => {
  const user = localStorage.getItem('user');
  return [user];
};

export default useStorage;
