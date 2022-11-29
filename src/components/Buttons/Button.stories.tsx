import React from "react";
import Button from "./Button";

export default{
    title: 'Form/Button',
    component: Button
}

export const Primary = () => <Button variant="primary" children="Primary"/>
export const Secondary = () => <Button variant="secondary" children="Secondary"/>
export const Success = () => <Button variant="success" children="Success"/>
export const Danger = () => <Button variant="danger" children="Danger"/>

type argsProps = {
    variant : string
    children : React.ReactNode
    rest? : {}
}

const Template = (args: argsProps) => <Button {...args}/>

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant : 'primary',
    children : 'Primary Args'
}
export const PrimaryB = Template.bind({})
PrimaryB.args = {
    variant : 'secondary',
    children : 'Primary Args'
}

export const Subscribe = Template.bind({})
Subscribe.args = {
    variant : 'danger',
    children : 'Subscribe'
}