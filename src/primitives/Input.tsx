import React from 'react'

interface Props {
  value: string
  setValue: (value: string) => void
}

const Input: React.FC<Props> = ({ value, setValue, saveValue }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return <input type="text" value={value} onChange={onChange} onBlur={saveValue} />
}

export default Input
