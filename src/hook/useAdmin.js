import axios from "axios";
import { useState, useEffect } from "react";
import { useInfiniteQuery, useQuery } from "react-query";

const useAdmin = (email) => {
  const [admin, setAdmin] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  console.log(email)

  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:5000/api/v1/admin/${email}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data)
          setAdmin(res.data.role);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [email]);

  // const { data, isLoading } = useQuery(["admin"], async (user) => {
  //   const res = await axios.get(`http://localhost:5000/api/v1/admin/${email}`, {
  //     withCredentials: true,
  //   });

  //   const result = res.data;
  //   return result;
  // });

  if (isLoading) {
    return <h2 className="text-white font-bold">Loading....</h2>;
  }

  // console.log(data.role);
  // console.log(admin);

  return { admin, isLoading };
};

export default useAdmin;