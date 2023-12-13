import React from "react";

const StacTable = () => {
  const tableHeader = (
    <tr className="text-[15px]">
      <th scope="col" className="px-6 py-3 border bg-gray-50 ">
        N
      </th>
      <th scope="col" className="px-6 py-3 border bg-gray-50 ">
        პირადი ნომერი
      </th>
      <th scope="col" className="px-6 py-3 border bg-gray-50 ">
        პაციენტი
      </th>
      <th scope="col" className="px-6 py-3 border bg-gray-50 ">
        ისტორიის ნომერი
      </th>
      <th scope="col" className="px-6 py-3 border bg-gray-50 ">
        მოსვლის თარიღი
      </th>
    </tr>
  );
  return (
    <div className="h-full">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 h-full cursor-pointer">
        <thead className="text-xs text-gray-700 bg-gray-50">
          {tableHeader}
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default StacTable;
