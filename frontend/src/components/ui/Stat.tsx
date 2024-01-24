interface Props {
  title: string;
  value: string;
  description?: string;
}

function Stat({ title, value, description }: Props) {
  return (
    <div className="stat">
      <h4 className="stat-title">{title}</h4>
      <p className="stat-value">{value}</p>
      <p className="stat-desc">{description}</p>
    </div>
  );
}

export default Stat;
