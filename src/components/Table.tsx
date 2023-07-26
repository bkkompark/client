const Table = <T extends {}>({ title, arr }: { title: string; arr: T[] }) => {
  return (
    <>
      <h1>{title}</h1>
      <table>
        <thead>
          <tr>
            {Object.keys(arr[0]).map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {arr.map((obj, index) => (
            <tr key={index}>
              {Object.values(obj).map((value: any, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
