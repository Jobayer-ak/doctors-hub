import React from "react";

const TableRow = ({ user, index }) => {
  const { email, name } = user;
  return (
    <tr>
          <th>{index + 1}</th>
      <td>{email}</td>
      <td>{name}</td>
      <td>
        <button className="btn btn-xs">Make Admin</button>
      </td>
      <td>
        <button className="btn btn-xs">X</button>
      </td>
    </tr>
  );
};

export default TableRow;
