interface Props {
  children: string;
}

function SubmitButton({ children }: Props) {
  return (
    <div className="form-control mt-6">
      <button className="btn btn-accent" type="submit">
        {children}
      </button>
    </div>
  );
}

export default SubmitButton;
