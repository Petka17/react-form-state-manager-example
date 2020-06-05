import React from 'react'

import Checkbox from '../primitives/Checkbox'
import Input from '../primitives/Input'
import { useField } from './context'

interface Props {
  name: keyof ApplicationFormFields
}

const Field: React.FC<Props> = ({ name }) => {
  const { value, error, isTouched, setValue, setCachedValue, commitValue } = useField(name)

  return (
    <div>
      {typeof value === 'string' && <Input value={value} setValue={setCachedValue} saveValue={commitValue} />}
      {typeof value !== 'string' && <Checkbox value={value} setValue={setValue} />}
      {isTouched && typeof error === 'string' && <p>{error}</p>}
    </div>
  )
}

export default Field
