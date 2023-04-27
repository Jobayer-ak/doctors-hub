import { useState, useEffect } from 'react';
// import { useInfiniteQuery, useQuery } from "react-query";
import baseURL from '../utils/baseURL';

const useAdmin = (email) => {
  const [admin, setAdmin] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (email) {
      baseURL
        .get(`/admin/${email}`, {
          withCredentials: true,
        })
        .then((res) => {
          setAdmin(res.data.role);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [email]);

  if (isLoading) {
    return <h2 className="text-white font-bold">Loading....</h2>;
  }

  return { admin, isLoading };
};

export default useAdmin;
