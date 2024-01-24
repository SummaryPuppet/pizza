interface Props {
  onSubmit: () => void;
  children: React.ReactNode;
}

function Form({ onSubmit, children }: Props) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <form className="card-body" onSubmit={onSubmit}>
            {children}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
