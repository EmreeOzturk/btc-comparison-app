import Input from './Input'
import type { InputProps } from './Input'

const AmountInput: React.FC<InputProps> = ({
    value: amount,
    onChange: setAmount

}) => {
    return (
        <div className='bg-blue-950 border border-white/10 rounded-md'>
            <Input
                value={amount}
                onChange={setAmount}
                placeholder='Amount'
                className='border-0 w-28 pl-4 focus:ring-0 focus:outline-none'
            />
            <span className='text-white/60  px-4'>
                USD
            </span>
        </div>
    )
}

export default AmountInput