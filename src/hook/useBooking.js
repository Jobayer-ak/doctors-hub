import { useQuery } from 'react-query';
import baseURL from '../utils/baseURL';

const useBooking = (user) => {
  const {
    data: table_data,
    isLoading,
    refetch,
  } = useQuery(['booking', user], async () => {
    const res = await baseURL.get(`/bookings?patient=${user.userEmail}`, {
      withCredentials: true,
    });
    const result = res.data;
    return result;
  });

  if (isLoading) {
    return <h2 className="text-xl font-bold text-white">Loading......</h2>;
  }

  return { table_data, refetch };
};

export default useBooking;
