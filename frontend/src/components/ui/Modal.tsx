interface Props {
  title: string;
  btnTitle: string;
  children: React.ReactNode;
}

function Modal({ title, btnTitle, children }: Props) {
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_1"
          )! as HTMLDialogElement;
          modal.showModal();
        }}
        type="button"
      >
        {btnTitle}
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{title}</h3>

          {children}

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Modal;
