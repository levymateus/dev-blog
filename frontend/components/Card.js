import Heading from "@components/Heading"
import Text from "@components/Text"
import Input from "@components/Input"
import Button from "@components/Button"
import Stepper from "@components/Stepper"
import TextArea from "@components/TextArea"
import { ArrowRight } from "react-feather"
import { useRef } from "react"

function Card() {
  const values = useRef(new Map())

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
            <Input name="email" type="email" required placeholder="you-email@email.com" />
          </Stepper.Step>
          <Stepper.Step num={2}>
            <TextArea name="text" type="message" required rows={3} placeholder="text" />
          </Stepper.Step>
        </div>

        <div className="flex justify-end mt-4">
          <Button
            variant="secondary"
            type="submit"
          >
            <div className="flex items-center gap-1">
              <Text>{step === 1 ? 'Send message' : 'Submit'}</Text>
              <ArrowRight width={14} height={14} />
            </div>
          </Button>
        </div>
      </form>}
    </Stepper>

  </div>
}

export default Card
