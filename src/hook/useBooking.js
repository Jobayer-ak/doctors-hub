import axios from "axios";
import { useQuery } from "react-query";


const useBooking = (user) => {
    const {
        data: table_data,
        isLoading,
        refetch,
      } = useQuery(["booking", user], async () => {
        const res = await axios.get(
          `http://localhost:5000/api/v1/bookings?patient=${user.userEmail}`,
          {
            withCredentials: true,
          }
        );
        const result = res.data;
        return result;
      });
    
      if (isLoading) {
        return <h2 className="text-xl font-bold text-white">Loading......</h2>;
      }
  
  // console.log(table_data);
  return { table_data, refetch };
}

export default useBooking;