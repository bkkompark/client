import { useEffect, useState } from "react";

// interface userDetail {
//   username: string;
//   gender: string;
//   age: number;
//   phone: string;
// }

const Detail = () => {
  return <h1>Detail</h1>;
};

// function Detail2() {
//   const [loading, setLoading] = useState(true);
//   const [userData, setUserData] = useState<userDetail[]>([]);

//   const getUserData = async () => {
//     const data = await (
//       await fetch("http://localhost:3000/trainer/test")
//     ).json();
//     console.log(data);
//     setUserData(data);
//     setLoading(true);
//   };

//   useEffect(() => {
//     getUserData();
//   }, []);

//   return <h1>{usename}</h1>;
// }

// const Detail3 = ({
//   username,
//   gender,
//   age,
//   phone,
// }: {
//   username: string;
//   gender: string;
//   age: number;
//   phone: string;
// }) => {
//   const targetUrl = `http://localhost:3000/trainer/${username}`;
//   window.location.href = targetUrl;
//   return (
//     <>
//       <h1>{username}</h1>
//     </>
//   );
// };

export default Detail;
