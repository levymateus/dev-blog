import Text from "@components/Text"

function DateText({ date = new DateText(), size = "sm" }) {
  const datetimeformat = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  })
  return <Text variant="neutral" size={size}>
    <span className="p-1 flex italic hover:cursor-default">
      {datetimeformat.format(date)}
    </span>
  </Text>
}

export default DateText
