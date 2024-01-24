interface Props {
  title: React.ReactElement | React.ReactElement[] | string;
  children: React.ReactElement | React.ReactElement[];
}

function MenuSideBarItem({ title, children }: Props) {
  return (
    <li>
      <details>
        <summary>{title}</summary>

        <ul>{children}</ul>
      </details>
    </li>
  );
}

export default MenuSideBarItem;
