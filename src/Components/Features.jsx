const Features = () => {
  return (
    <div className="my-6">
      <p className="text-3xl text-blue-600 text-center font-bold ">Features</p>
      <p className="text-center font-bold ">
        A lot of features included at our forum. Here below are some samples..
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:my-10">
        <div className="card w-96 border-2  shadow-xl">
          <figure>
            <img
              className="h-64"
              src="https://i.ibb.co/YkyZ82K/forum.jpg"
              alt="Discussion Forums"
            />
          </figure>
          <div className="card-body bg-gray-300">
            <h2 className="card-title">
              Discussion Forum
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Our discussion forums within each study group where members can
              ask questions, share resources, and discuss topics related to
              their studies.
            </p>
          </div>
        </div>
        <div className="card w-96 border-2  shadow-xl">
          <figure>
            <img
              className="h-64"
              src="https://i.ibb.co/XVNzzbC/livechat.webp"
              alt="Live Chat"
            />
          </figure>
          <div className="card-body bg-gray-300">
            <h2 className="card-title">
              Live Chat
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Incorporate a real-time chat feature within study groups to
              facilitate instant communication and collaboration among members.
            </p>
          </div>
        </div>
        <div className="card w-96 border-2  shadow-xl">
          <figure>
            <img
              className="h-64"
              src="https://i.ibb.co/tLhQB1G/video.jpg"
              alt="Video Conference"
            />
          </figure>
          <div className="card-body bg-gray-300">
            <h2 className="card-title">
              Video Conferencing
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Integrate video conferencing functionality for virtual study
              sessions, enabling users to meet face-to-face online for group
              discussions and study sessions.
            </p>
          </div>
        </div>
        <div className="card w-96 border-2  shadow-xl">
          <figure>
            <img
              className="h-64"
              src="https://i.ibb.co/nb7HJW0/attendance.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-gray-300">
            <h2 className="card-title">
              Attendance Traking
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Users should be able to manage their profiles, update personal
              information, and upload a profile picture.
            </p>
          </div>
        </div>
        <div className="card w-96 border-2  shadow-xl">
          <figure>
            <img
              className="h-64"
              src="https://i.ibb.co/XsYW7XC/auth.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-gray-300">
            <h2 className="card-title">
              User Authentication
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Allow users to create accounts and log in securely to access the
              platform
            </p>
          </div>
        </div>
        <div className="card w-96 border-2 shadow-xl">
          <figure>
            <img
              className="h-64"
              src="https://i.ibb.co/PjK02GX/manpng.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-gray-300">
            <h2 className="card-title">
              Task Management
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Provide tools for task assignment, tracking progress, and setting
              deadlines within study groups to keep members organized and
              focused.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
