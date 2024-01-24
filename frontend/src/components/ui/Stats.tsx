interface Props {
  children: React.ReactNode;
}
function Stats({ children }: Props) {
  return <section className="stats shadow">{children}</section>;
}

export default Stats;
