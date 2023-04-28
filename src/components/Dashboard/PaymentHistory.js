import { format } from 'date-fns';
import React, { useState } from 'react';
import Loader from '../common/Loading/Loader';
import usePagination from '../../hook/usePaginatation';
import useStorage from '../../hook/useStorage';
import DataPagination from '../pagination/DataPagination';

const PaymentHistory = () => {
  const [limit, setLimit] = useState(5);
  const [user] = useStorage();
  const userInfo = JSON.parse(user);
  const url = `/user-payment-history`;

  const extraQueries = {
    email: `${userInfo.email}`,
  };
  const { data, isLoading, pagination, currentPage } = usePagination(
    url,
    limit,
    extraQueries
  );

  return (
    <div className="px-4">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-500">
                <tr>
                  <th className="p-2 border">Sr.</th>
                  <th className="p-2 border">Doctor Name</th>
                  <th className="p-2 border">speciality</th>
                  <th className="p-2 border">Slot</th>
                  <th className="p-2 border">Branch</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Transaction Id</th>
                </tr>
              </thead>

              <tbody>
                {data?.paymentInfo?.map((a, index) => (
                  <tr className="relative text-center" key={index}>
                    <td className="sticky left-0 bg-slate-400 border">
                      {data.queries.skip === 0
                        ? index + 1
                        : (currentPage - 1) * limit + index + 1}
                    </td>
                    <td className="bg-slate-300 p-2 border md:table-cell">
                      {a.doctor_name}
                    </td>
                    <td className="bg-slate-300 p-2 border md:table-cell">
                      {a.speciality}
                    </td>

                    <td className="bg-slate-300 p-2 border md:table-cell">
                      {a.slot}
                    </td>
                    <td className="bg-slate-300 p-2 border md:table-cell">
                      {a.branch}
                    </td>
                    <td className="bg-slate-300 p-2 border md:table-cell">
                      {format(new Date(a.date), 'PP')}
                    </td>
                    <td className="bg-slate-300 p-2 border md:table-cell">
                      {a.transactionId}
                    </td>
                  </tr>
                ))}
              </tbody>
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

export default PaymentHistory;
