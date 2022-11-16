import classNames from "classnames"


function Button({ text, variant = 'default' }) {
  return (
    <button className={classNames({
      "p-4 h-10 flex items-center rounded": true,
      "bg-black": variant === 'default',
      "bg-red-500": variant === 'danger',
      "bg-yellow-500": variant === 'warning',
      "bg-green-600": variant === 'success', // TODO Fix This mf
    })}>{text}</button>
  )
}

export default Button