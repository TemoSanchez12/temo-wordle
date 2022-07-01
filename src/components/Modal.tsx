import ReactDOM from 'react-dom'

type ModalProps = {
  children: JSX.Element
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <Backdrop container={document.getElementById('overlay') as HTMLElement}>
      <div className='bg-white w-modal dark:bg-primary-dark dark:border-secondary-dark rounded-2xl border border-black p-5'>
        {children}
      </div>
    </Backdrop>
  )
}

type BackdropProps = {
  children: JSX.Element
  container: HTMLElement
}

const Backdrop = ({ children, container }: BackdropProps) => {
  return ReactDOM.createPortal(
    <div className='absolute h-full w-full z-10 flex justify-center items-center flex-col bg-modal-backdrop-light dark:bg-modal-backdrop-dark top-0'>
      {children}
    </div>,
    container
  )
}
