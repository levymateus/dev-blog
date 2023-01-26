import Heading from "@components/Heading"
import Text from "@components/Text"
import InputText, { Input } from "@components/Input"
import Button from "@components/Button"
import Stepper from "@components/Stepper"
import TextArea from "@components/TextArea"
import { ArrowRight } from "react-feather"
import { useRouter } from "next/router"
import { useRef, useEffect } from "react"
import useStore from "@hooks/useStore"

function Card() {
  const emailInputRef = useRef()
  const values = useRef(new Map())
  const router = useRouter()
  const hash = router.asPath.split('#')[1]
  const [setAppBarIsVisible] = useStore(store => [store.setAppBarIsVisible])

  useEffect(() => {
    if (hash === 'contact' && emailInputRef.current) {
      emailInputRef.current.focus()
      setAppBarIsVisible(false)
    }
  }, [hash, setAppBarIsVisible])

  return <div className="flex flex-col rounded bg-cyan-100 bg-rw-rw px-3 py-5">

    <Heading>Contact-me</Heading>
    <Text className="mt-2">Send-me a message</Text>

    <Stepper
      maxSteps={2}
      onComplete={() => {
        console.log('email', values.current.get('email'))
        console.log('text', values.current.get('text'))
      }}
    >
      {({ step, next }) => <form
        onSubmit={(evt) => {
          evt.preventDefault()
          if (evt.target.checkValidity()) {
            const formData = new FormData(evt.target)

            if (formData.get('email')) {
              values.current.set('email', formData.get('email'))
            }

            if (formData.get('text')) {
              values.current.set('text', formData.get('text'))
            }

            next()
          } else {
            evt.target.reportValidity()
          }
        }}
      >
        <div action="post" className="mt-8">
          <Stepper.Step num={1}>
            <InputText>
              <Input.Input ref={emailInputRef} name="email" type="email" required placeholder="you-email@email.com" />
            </InputText>
          </Stepper.Step>
          <Stepper.Step num={2}>
            <TextArea autoFocus name="text" type="message" required rows={3} placeholder="text" />
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
