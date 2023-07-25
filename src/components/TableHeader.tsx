interface TableHeaderProps {
  columns: string[];
}

const TableHeader = ({ columns }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        {columns.map((col: string, index: number) => (
          <th key={index}>{col}</th>
        ))}
        <th></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
