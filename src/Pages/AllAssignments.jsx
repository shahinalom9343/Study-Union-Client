import { Link, useLoaderData } from "react-router-dom";

const AllAssignments = () => {
  const assignments = useLoaderData();
  // console.log(assignments);

  // delete function
  const handleDelete = (_id) => {
    // console.log(_id);
    fetch(`http://localhost:5000/assignments/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          alert("Assignment Deleted Successfully");
        }
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
      {assignments.map((assignment) => (
        <div
          key={assignment._id}
          className="card lg:card-side bg-base-100 shadow-xl"
        >
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body bg-pink-100">
            <h2 className="card-title">{assignment.titleName}</h2>
            <div>Total Marks : {assignment.marks}</div>
            <div>
              Difficulty :
              <div className="badge badge-secondary">
                {assignment.difficulty}
              </div>
            </div>
            <div className="flex gap-1">
              <div className="card-actions justify-start">
                <button
                  onClick={() => handleDelete(assignment._id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
              <div className="card-actions justify-center">
                <button className="btn btn-success btn-outline">Update</button>
              </div>
            </div>
            <div className="card-actions">
              <Link
                to={`/assignmentDetails/${assignment._id}`}
                className="btn w-full btn-primary"
              >
                View Assignment
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllAssignments;
