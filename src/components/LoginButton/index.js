import React from 'react'
import './index.css'

const LoginButton = props => (
    <button type="submit" className="login submit" onClick={props.onSubmit}>ログイン</button>
)

export default LoginButton
