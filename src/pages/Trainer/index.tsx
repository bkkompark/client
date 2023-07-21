const users = [
  {
    email: "my-email",
    name: "test",
    gender: "male",
    age: 555,
    phone: "010-0000-0000",
  },
  {
    email: "my-email22", // key
    name: "test1",
    gender: "male",
    age: 555,
    phone: "010-0000-0120",
  },
];

export const User = () => {
  const user = users.map((user) => <li key={user.email}>{user.name}</li>);
  return <ul>{user}</ul>;
};

const Trainer = () => {
  return (
    <>
      <User />
    </>
  );
};

export default Trainer;

// import { getImageUrl } from './utils.js'

// function Avatar({ person, size }) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// function Card({ children }) {
//   return (
//     <div className="card">
//       {children}
//     </div>
//   );
// }
