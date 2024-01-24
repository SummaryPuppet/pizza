interface Props {
  text: string;
  variant: "success" | "error" | "info" | "warning";
}

function Toast({ text, variant }: Props) {
  return (
    <div className="toast">
      <div className={`alert alert-${variant}`}>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default Toast;
