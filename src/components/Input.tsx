import React, { ChangeEventHandler } from 'react'

export type InputProps = {
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
    className?: string
    placeholder?: string
}
const Input: React.FC<InputProps> = ({
    value,
    onChange,
    className = '',
    placeholder = ''

}) => {
    return (
        <input type="text"
            className={`border border-white/10 bg-blue-950 rounded-md p-2 ${className} }`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

export default Input