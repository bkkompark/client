import { useState, useEffect } from "react";
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

export default CustomerByTrainer;
