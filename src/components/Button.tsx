import { MouseEventHandler } from 'react'

type ButtonProps = {
  children: string
  onClick: (e: any) => void
  styles: string
}

const Button = ({ children, onClick, styles }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary-green py-2 px-12 font-semibold text-2xl text-white text-center rounded-md ${styles}`}
    >
      {children}
    </button>
  )
}

export default Button
