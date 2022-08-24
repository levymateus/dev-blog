import { useEffect, useRef, useState } from 'react'
import debounce from '../utils/debounce'
import { value } from '../utils/utils'

function Input({ label, name, placeholder, onError, helperText = '', variant = '', ...props }) {
  const [helperTextValue, setHelperTextValue] = useState(helperText)
  const inputRef = useRef()

  function clearStatus() {
    if (inputRef.current) {
      inputRef.current.classList.remove('error')
      inputRef.current.classList.remove('success')
    }
  }

  function setSuccess() {
    if (inputRef.current && value(inputRef.current.value).is.notEmpty()) {
      inputRef.current.classList.remove('error')
      inputRef.current.classList.add('success')
    }
  }

  function setError() {
    if (inputRef.current) {
      inputRef.current.classList.add('error')
      inputRef.current.classList.remove('success')
    }
  }

  function validate(validity, validationMessage) {

    if (value(inputRef.current?.value).is.empty() && !inputRef.current.required) {
      clearStatus()
      return setHelperTextValue(helperText)
    }

    if (value(inputRef.current?.value).is.empty() && inputRef.current.required) {
      setError()
      return setHelperTextValue(helperText)
    }

    if (validity.valid) {
      setSuccess()
      return setHelperTextValue(helperText)
    }

    if (!validity.valid) {
      let msg = validationMessage

      if (value(onError).is.func()) {
        msg = onError(validity) || helperText
      }

      if (value(onError).is.string()) {
        msg = onError
      }

      if (msg) {
        setError()
      }

      return setHelperTextValue(msg)
    }
  }

  function handleChange(evt) {
    const notEqual = (a, b) => value(a).is.notEqual(b)
    const callback = () => validate(evt.target.validity, evt.target.validationMessage)
    debounce(evt.target.value, notEqual, callback, 1000)
  }

  function handleBlur(evt) {
    validate(evt.target.validity, evt.target.validationMessage)
  }

  useEffect(() => {
    if (inputRef.current && value(variant).is.notEmpty()) {
      inputRef.current.classList.add(variant)
    }
  }, [inputRef, variant])

  return <div className='input-text mb-16 full-width'>
    <input
      ref={inputRef}
      className='input-text pl-16 pr-16'
      name={name}
      placeholder={label}
      onChange={handleChange}
      onBlur={handleBlur}
      {...props}
    />
    <label
      className='input-text font-5'
      htmlFor={name}
    >
      {label}
    </label>
    <span className='font-5 pl-16 pr-16'>{helperTextValue}</span>
  </div>
}

export default Input
