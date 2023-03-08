import Heading from "@components/Heading"
import Text from "@components/Text"
import InputText, { Input } from "@components/Input"
import Button from "@components/Button"
import Stepper from "@components/Stepper"
import TextArea from "@components/TextArea"
import { ArrowRight } from "react-feather"
import { useRouter } from "next/router"
import { useRef, useEffect, useState } from "react"
import { X } from "react-feather"
import useStore from "@hooks/useStore"
import clsx from "clsx"

function Card() {
  const emailInputRef = useRef()
  const [values, setValues] = useState({ text: '', email: '' })
  const router = useRouter()
  const hash = router.asPath.split('#')[1]
  const setAppBarIsOpen = useStore(({ setAppBarIsOpen }) => setAppBarIsOpen)

  function handleInputChange(evt) {
    setValues(prevValues => ({
      ...prevValues,
      [evt.target.name]: evt.target.value
    }))
  }

  useEffect(() => {
    if (hash === 'contact' && emailInputRef.current) {
      emailInputRef.current.focus()
    }
  }, [hash, setAppBarIsOpen])

  return <div className="flex flex-col rounded bg-cyan-100 bg-rw-rw px-3 py-5">

    <Heading>Contact-me</Heading>
    <Text className="mt-2">Send-me a message</Text>

    <Stepper
      maxSteps={2}
      onComplete={() => {
        console.log('email', values['email'])
        console.log('text', values['text'])
      }}
    >
      {({ step, next }) => <form
        onSubmit={(evt) => {
          evt.preventDefault()
          if (evt.target.checkValidity()) {
            next()
          } else {
            evt.target.reportValidity()
          }
        }}
      >
        <div action="post" className="mt-8">
          <Stepper.Step num={1}>
            <InputText>
              <Input.Input
                ref={emailInputRef}
                name="email"
                type="email"
                onChange={handleInputChange}
                blurHotkey="Escape"
                value={values['email']}
                accessKey="c"
                required
                placeholder="you-email@email.com"
              />
              <Input.Icon
                className={clsx("hover:cursor-pointer", {
                  "visible": values['email'],
                  "invisible": !values['email']
                })}
                onClick={() => setValues(prevValues => ({
                  ...prevValues,
                  email: ''
                }))}
                icon={X}
              />
            </InputText>
          </Stepper.Step>
          <Stepper.Step num={2}>
            <TextArea
              autoFocus
              name="text"
              type="message"
              onChange={handleInputChange}
              required
              rows={3}
              placeholder="text"
            />
          </Stepper.Step>
        </div>

        <div className="flex justify-end mt-4">
          <Button
            variant="secondary"
            type="submit"
          >
            <div className="flex items-center">
              <Text className="pr-1">{step === 1 ? 'Send message' : 'Submit'}</Text>
              <ArrowRight width={14} height={14} />
            </div>
          </Button>
        </div>
      </form>}
    </Stepper>

  </div>
}

export default Card
