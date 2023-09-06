import React, { ChangeEventHandler } from 'react'

export type InputProps = {
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
    className?: string
    placeholder?: string
    type?: string
}
const Input: React.FC<InputProps> = ({
    value,
    onChange,
    className = '',
    placeholder = '',
    type = 'text'

}) => {
    return (
        <input
            className={`border border-white/10 bg-blue-950 rounded-md p-2 ${className} }`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />
    )
}

export default Input