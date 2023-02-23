import { useState, useEffect } from "react";
// import { useInfiniteQuery, useQuery } from "react-query";
import baseURL from "../utils/baseURL";

const useAdmin = (email) => {
  const [admin, setAdmin] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  console.log(email);

  useEffect(() => {
    if (email) {
      baseURL
        .get(`/admin/${email}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          setAdmin(res.data.role);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [email]);

  // const { data, isLoading } = useQuery(["admin"], async (user) => {
  //   const res = await baseURL.get(`https://doctors-hub-server.vercel.app/api/v1/admin/${email}`, {
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
