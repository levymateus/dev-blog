import Text from "@components/Text"

function DateText({ date = new DateText(), size = "sm" }) {
  const datetimeformat = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  })
  return <Text className="text-gray-700 dark:text-gray-500 italic hover:cursor-default" size={size}>
    {datetimeformat.format(date)}
  </Text>
}

export default DateText
