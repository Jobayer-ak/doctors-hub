import React, { useState } from 'react';
import { format } from 'date-fns';
import Loader from '../../common/Loading/Loader';
import usePagination from '../../../hook/usePaginatation';
import DataPagination from '../../pagination/DataPagination';

const AllAppointments = () => {
  const [limit, setLimit] = useState(5);
  const url = `/all-appointments`;
  const { data, isLoading, pagination, currentPage } = usePagination(
    url,
    limit
  );

  console.log("Limit: ", limit);

  console.log(limit);

  return (
    <div className="px-4">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full md:min-w-[60%]">
              <thead className="bg-slate-500">
                <tr className="sticky top-0 z-50">
                  <th className="p-2 border sticky left-0">Sr.</th>
                  <th className="p-2 border">Doctor</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Time</th>
                  <th className="p-2 border">Specialist</th>
                </tr>
              </thead>

              {data?.appointments?.map((a, index) => (
                <tr className="relative text-center" key={index}>
                  <td className="sticky left-0 bg-slate-400 border">
                    {/* {limit > data.appointments.length
                      ? index + 1
                      : (currentPage - 1) * limit + index + 1} */}
                    {/* {index + 1} */}
                    {(currentPage - 1) * limit + index + 1}
                  </td>
                  <td className="bg-slate-300 p-2 border">{a.doctor_name}</td>
                  <td className="bg-slate-300 p-2 border">
                    {format(new Date(a.date), 'PP')}
                  </td>
                  <td className="bg-slate-300 p-2 border">{a.slot}</td>
                  <td className="bg-slate-300 p-2 border">{a.speciality}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      )}

      {/* pagination */}
      <div className="w-full">
        <DataPagination setLimit={setLimit} />
        <div className="w-full mt-2 flex justify-end">{pagination}</div>
      </div>
    </div>
  );
};

export default AllAppointments;


