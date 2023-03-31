import React, { useState } from 'react';
import { format } from 'date-fns';
import Loader from '../../common/Loading/Loader';
import usePagination from '../../../hook/usePaginatation';
import DataPagination from '../../pagination/DataPagination';

const AllAppointments = () => {
  const [limit, setLimit] = useState(2);
  const url = `/all-appointments`;
  const { data, loading, pagination, currentPage } = usePagination(url, limit);


  return (
    <div className="px-4">
      {loading ? (
        <Loader />
      ) : (
        <div className="overflow-x-auto">
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
              {data?.appointments?.map((a, index) => (
                <tr className="relative" key={index}>
                  <th className="sticky left-0">
                    {(currentPage - 1) * limit + index + 1}
                  </th>
                  <td>{a.doctor_name}</td>
                  <td>{format(new Date(a.date), 'PP')}</td>
                  <td>{a.slot}</td>
                  <td>{a.speciality}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* pagination */}
      <DataPagination setLimit={setLimit} />
      <div className="w-full mt-2 flex justify-end">{pagination}</div>
    </div>
  );
};

export default AllAppointments;
