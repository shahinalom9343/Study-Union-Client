const MySubmitted = () => {
  return (
    <div className="container border-2 px-2 md:my-10 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight text-center">
        My Submitted Assignments
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-base">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="dark:bg-gray-300">
            <tr className="text-left font-bold bg-slate-200">
              <th className="p-3">Title of the Assignment</th>
              <th className="p-3">Assignment Marks</th>
              <th className="p-3">Obtained Marks</th>
              <th className="p-3">Feedbacks</th>
              <th className="p-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
              <td className="p-3">
                <p>97412378923</p>
              </td>
              <td className="p-3">
                <p>Microsoft Corporation</p>
              </td>
              <td className="p-3">
                <p>14 Jan 2022</p>
                <p className="dark:text-gray-600">Friday</p>
              </td>
              <td className="p-3">
                <p>01 Feb 2022</p>
                <p className="dark:text-gray-600">Tuesday</p>
              </td>

              <td className="p-3 text-center">
                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                  <button className="btn btn-info text-white font-semibold">
                    Pending
                  </button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySubmitted;
