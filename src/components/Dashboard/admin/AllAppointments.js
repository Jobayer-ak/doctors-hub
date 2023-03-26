import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import AuthContext from '../../../context/AuthProvider';
import { format } from 'date-fns';
import Loader from '../../common/Loading/Loader';
import baseURL from '../../../utils/baseURL';
import { Dna } from 'react-loader-spinner';

const AllAppointments = () => {
  const { user } = useContext(AuthContext);

  let loader = '';

  const { data, isLoading } = useQuery(
    ['allAppointments', user.userRole],
    async () => {
      const res = await baseURL.get('/all-appointments', {
        withCredentials: true,
      });
      const result = res.data;
      return result;
    }
  );

  if (isLoading) {
    return (loader = (
      <div className="flex justify-center items-center bg-[#23075e] ml-1 w-[86%] h-[50vh]">
        <Dna
          visible={true}
          height="120"
          width="120"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    ));
  }

  return (
  
    <div className="px-4">
      { isLoading ? loader: (<div className="overflow-x-auto">
        <table className="table w-full md:min-w-[60%] lg:w-full">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Specialist</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((a, index) => (
              <tr className="relative">
                <th className="sticky left-0">{index + 1}</th>
                <td>{a.doctor_name}</td>
                <td>{format(new Date(a.date), 'PP')}</td>
                <td>{a.slot}</td>
                <td>{a.speciality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>)}
      
    </div>
  );
};

export default AllAppointments;
