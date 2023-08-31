import { useForm } from "../../hooks/useForm";
import { CustomerApi } from "../../api";

export type enrollObject = {
  name: string;
  age: number;
  gender: "남자" | "여자";
  phone: string;
  trainerId: string;
};

const CustomerForm = ({ trainers }: any) => {
  // callback 함수
  const enrollUser = async (userInfo: enrollObject) => {
    const { name, age, gender, phone, trainerId } = userInfo;
    const { data } = await CustomerApi.enroll(
      name,
      age,
      gender,
      phone,
      trainerId
    );
    console.log(data);
  };

  const [values, handleChange, handleSubmit, error] = useForm<enrollObject>(
    {
      name: "",
      age: 0,
      gender: "남자",
      phone: "",
      trainerId: "",
      // customerId: "",
    },
    enrollUser // callback 함수가 promise 를 반환
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>회원 등록</h1>
        <input type="" name="name" placeholder="NAME" onChange={handleChange} />
        <input
          type="number"
          name="age"
          placeholder="AGE"
          onChange={handleChange}
        />
        <select name="gender" onChange={handleChange}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
        <input
          type=""
          name="phone"
          placeholder="PHONE"
          onChange={handleChange}
        />
        {/* <label htmlFor="trainer-select">트레이너 할당</label> */}
        <select name="trainerId" onChange={handleChange}>
          <option value="">트레이너</option>
          {trainers.map((trainer: any) => (
            <option value={trainer.id}>{trainer.name}</option>
          ))}
        </select>
        <input type="submit" value="회원 등록" />
      </form>
    </>
  );
};

export default CustomerForm;
