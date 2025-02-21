

const Button = (props:any) => {

  return (
  <>
  <button onClick={props.function} className="button">{props.data}</button>
  </>
  )
}

export default Button
