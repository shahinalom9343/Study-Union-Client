import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PendingAssignments = () => {
  const { user } = useContext(AuthContext);
  const submittedAssignments = useLoaderData();
  return (
    <div className="container border-2 px-2 md:my-10 mx-auto sm:p-4 dark:text-gray-800">
      <Helmet>
        <title>Study Union | Pending Assignments</title>
      </Helmet>
      <h2 className="mb-4 text-2xl text-lime-600 font-semibold leading-tight text-center">
        List of Pending Assignments
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
              <th className="p-3">Examinee Name</th>
              <th className="p-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {submittedAssignments.map((singleAssignment) => (
              <tr
                key={singleAssignment._id}
                className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
              >
                <td className="p-3">
                  <p>{singleAssignment.titleName}</p>
                </td>
                <td className="p-3">
                  <p>{singleAssignment.marks}</p>
                </td>
                <td className="p-3">
                  <p>{singleAssignment.username}</p>
                </td>
                <td className="p-3 text-center">
                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <button className="btn btn-info bg-violet-600  text-white font-semibold">
                      Give Mark
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingAssignments;
