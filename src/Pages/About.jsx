import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Study Union | About</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:my-10">
        <div className="text-3xl font-bold col-span-1 text-orange-400 flex my-auto ml-10">
          About Us
        </div>
        <div className="text-justify col-span-1 md:col-span-3 text-base px-4">
          Welcome to Study Union, where we believe that learning is most
          effective when it's a collaborative endeavor. Our platform was born
          out of a simple yet powerful idea: to provide students with a virtual
          space where they can come together, share knowledge, and support each
          other in their academic journey. <br /> <br /> In today's fast-paced
          educational landscape, students face a multitude of challenges. From
          complex assignments to demanding exams, the path to success can often
          feel overwhelming when traveled alone. That's why we created study
          Union - to break down barriers and foster a sense of community among
          learners. we understand that every student learns differently. <br />{" "}
          <br /> That's why our platform offers a flexible and customizable
          approach to group study. Whether you prefer real-time discussions,
          asynchronous collaboration, or structured study sessions, you'll find
          the tools you need to thrive here. Our mission is simple: to empower
          students to reach their full academic potential through the power of
          collaboration. <br /> <br /> By connecting with peers, sharing
          resources, and working together towards common goals, students can not
          only improve their grades but also develop essential skills such as
          communication, critical thinking, and teamwork. What sets from us,
          apart is our commitment to innovation and excellence. We're constantly
          evolving our platform to meet the changing needs of students and
          educators alike. <br /> <br /> Join us on our mission to revolutionize
          learning through collaboration. Sign up for today and discover a new
          way to study, connect, and succeed.
        </div>
      </div>
    </div>
  );
};

export default About;
