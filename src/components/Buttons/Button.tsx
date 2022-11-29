import React from 'react'
import './Button.scss'
type buttonTypeProps = {
    variant : string
    children : React.ReactNode
    rest?: {}
}
 const Button = (props: buttonTypeProps)=>{
    const {variant='primary', children="button", ...rest} = props
  return (
    <button className={`button ${variant}`} {...rest}>{children}</button>
  )
}
export default Button;
