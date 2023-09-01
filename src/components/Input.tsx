import React, { ChangeEventHandler } from 'react'
type InputProps = {
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
    className?: string
}
const Input: React.FC<InputProps> = ({
    value,
    onChange,
    className = ''
}) => {
    return (
        <input type="text"
            className={'border border-white/10 bg-blue-950 rounded-md p-2' + className}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input