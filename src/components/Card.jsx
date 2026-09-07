// const ade = {
//   name: "Adeyemi Franklin",
//   height: "6ft",
//   age: 30,
//   email: "TestingUser@gmail.com",
//   occupation: "Electrician",
//   status: "Single",
//   desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam officiis deleniti expedita sequi eligendi quidem laboriosam ullam dicta praesentium quis.",
//   phone: +123123456789,
//   image:
//     "https://images.squarespace-cdn.com/content/v1/624f4bb135fbf60489e1bccf/508daf7a-c6fd-4543-b032-d49853072d37/Actor+Headshots+Los+Angeles.jpg",
// };
const Card = ({user}) => {
  return (
    <div className="border max-w-[300px] rounded-lg ">
      <img
        src={user.image}
        alt="profile pics"
        className="h-[300px] w-full object-cover object-top rounded-t-lg "
      />

      <div className="py-4 px-3">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl">{user.name}</h2>
          <h5 className="text-xs font-semibold">Age: {user.age}</h5>
        </div>

        <div className="mt-2 flex justify-between items-center">
          <h3 className="text-xs font-semibold">{user.email}</h3>
          <h3 className="text-xs font-semibold">Height: {user.height}</h3>
        </div>

        <div className="mt-2 flex justify-between items-center">
          <h3 className="text-xs font-semibold">{user.occupation}</h3>
          <h3 className="text-xs font-semibold">Status: {user.status}</h3>
        </div>

        <div className="mt-2 flex justify-between items-center">
          <h3 className="text-xs font-semibold">Phone: {user.phone}</h3>
        </div>

        <h3 className="text-xs text-justify mt-4">{user.desc}</h3>
      </div>
    </div>
  );
};

export default Card;
