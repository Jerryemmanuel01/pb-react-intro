import Card from "./Card";
import Couter from "./Couter";
import Tasks from "./Tasks";

const Hero = ({ users }) => {
  return (
    <div className="px-6">
      {console.log("Seeing this")}
      {/* <div className=" grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5">
        {users.map((val, i) => (
          <Card user={val} />
        ))}
      </div> */}

      {/* <Couter /> */}

      <Tasks />

    </div>
  );
};

export default Hero;
