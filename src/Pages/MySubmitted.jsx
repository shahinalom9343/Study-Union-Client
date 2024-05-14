import { useLoaderData } from "react-router-dom";

const MySubmitted = () => {
  const submittedAssignments = useLoaderData();
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
            <tr className="text-center font-bold bg-slate-200">
              <th className="p-3 text-center">Title of the Assignment</th>
              <th className="p-3 text-center">Assignment Marks</th>
              <th className="p-3 text-center">Obtained Marks</th>
              <th className="p-3 text-center">Feedbacks</th>
            </tr>
          </thead>
          <tbody>
            {submittedAssignments.map((singleAssignment) => (
              <tr
                key={singleAssignment._id}
                className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
              >
                <td className="p-3 text-center">
                  <p>{singleAssignment.titleName}</p>
                </td>
                <td className="p-3 text-center">
                  <p>{singleAssignment.marks}</p>
                </td>
                <td className="p-3 text-center">
                  <p>{singleAssignment.doclink}</p>
                </td>

                <td className="p-3 text-center">
                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <textarea
                      name=""
                      placeholder="Your Feedback Here"
                      id=""
                    ></textarea>
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

export default MySubmitted;
