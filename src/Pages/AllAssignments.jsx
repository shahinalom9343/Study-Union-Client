import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AssignmentCard from "./AssignmentCard";

const AllAssignments = () => {
  const assignments = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const assignmentsPerPage = 10;
  const totalPages = Math.ceil(assignments.length / assignmentsPerPage);

  const pages = [...Array(totalPages).keys()];
  // console.log(pages);

  return (
    <div>
      <Helmet>
        <title>Study Union | Assignments</title>
      </Helmet>
      <h1 className="text-2xl text-center mt-4">
        All Assignments based on Difficulty level
      </h1>
      <Tabs>
        <div className="my-10 py-1 mx-auto bg-orange-100 text-lg font-semibold">
          <TabList>
            <Tab>All</Tab>
            <Tab>Easy</Tab>
            <Tab>Medium</Tab>
            <Tab>Hard</Tab>
          </TabList>
        </div>
        {/* <div className="flex mx-auto justify-center items-center mb-28">
          <div>Category By :</div>
          <div className="flex justify-center items-center">
            <div>
              <details className="dropdown flex">
                <summary className="m-1 btn">
                  <div>Difficulty</div>
                  <div className="text-xl">
                    <span>
                      <IoIosArrowDropdown />
                    </span>
                  </div>
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <a>Easy</a>
                  </li>
                  <li>
                    <a>Medium</a>
                  </li>
                  <li>
                    <a>Hard</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div> */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            {assignments.map((assignment) => (
              <AssignmentCard
                key={assignment._id}
                assignment={assignment}
              ></AssignmentCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            {assignments
              .filter((single) => single.difficulty === "easy")
              .map((assignment) => (
                <AssignmentCard
                  key={assignment._id}
                  assignment={assignment}
                ></AssignmentCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            {assignments
              .filter((single) => single.difficulty === "medium")
              .map((assignment) => (
                <AssignmentCard
                  key={assignment._id}
                  assignment={assignment}
                ></AssignmentCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            {assignments
              .filter((single) => single.difficulty === "hard")
              .map((assignment) => (
                <AssignmentCard
                  key={assignment._id}
                  assignment={assignment}
                ></AssignmentCard>
              ))}
          </div>
        </TabPanel>
      </Tabs>
      <div className="join mx-auto flex justify-center items-center gap-1 my-4">
        <button className="btn btn-outline">Next</button>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className="btn btn-outline"
            key={page}
          >
            {page + 1}
          </button>
        ))}
        <button className="btn btn-outline">Next</button>
      </div>
    </div>
  );
};

export default AllAssignments;
