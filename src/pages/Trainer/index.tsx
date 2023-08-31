import React, { useState, useEffect } from "react";
import { TrainerApi } from "../../api";
import { CustomerApi } from "../../api";
import TableHeader from "../../components/TableHeader";

const CustomerByTrainer = ({
  selectedTrainerId,
}: {
  selectedTrainerId: number | null;
}) => {
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState<any>([]);

  const getCustomers = async () => {
    const { data: customers } = await CustomerApi.getCustomerAll();
    // console.log("customer : ", customers);
    setCustomers(customers);
    setLoading(false);
  };

  useEffect(() => {
    getCustomers();
  }, [loading]);

  const filteredCustomers = selectedTrainerId
    ? customers.filter(
        (customer: any) => customer.trainerId === selectedTrainerId
      )
    : customers;

  return (
    <>
      <table>
        <TableHeader
          columns={["id", "name", "age", "gender", "phone", "trainer"]}
        />
        <tbody>
          {filteredCustomers.map((user: any) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>{user.trainer ? user.trainer.name : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Trainer = () => {
  const [loading, setLoading] = useState(true);
  const [trainers, setTrainers] = useState<any>([]);
  const [selectedTrainerId, setSelectedTrainerId] = useState<number | null>(
    null
  );

  const getTrainers = async () => {
    const { data: trainers } = await TrainerApi.getTrainerAll();
    // console.log("trainers : ", trainers);
    setTrainers(trainers);
    setLoading(false);
  };

  useEffect(() => {
    getTrainers();
  }, [loading]);

  const handleTrainer = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTrainerId = parseInt(e.target.value);
    setSelectedTrainerId(selectedTrainerId !== 0 ? selectedTrainerId : null);
  };

  return (
    <>
      <h1>담당 트레이너</h1>
      <select onChange={handleTrainer}>
        <option value={0}>--</option>
        {trainers.map((trainer: any) => (
          <option key={trainer.id} value={trainer.id}>
            {trainer.name}
          </option>
        ))}
      </select>
      <hr />
      <h1>회원</h1>
      <CustomerByTrainer selectedTrainerId={selectedTrainerId} />
    </>
  );
};

export default Trainer;
