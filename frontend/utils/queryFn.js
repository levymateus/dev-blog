import qs from "qs"
import { fetchAPI } from "../lib/api"

function queryFn({ queryKey, signal }) {
  const [route, options] = queryKey
  let path = `${route}`

  if (typeof options === 'object') {
    path += '?' + qs.stringify(options, { encodeValuesOnly: true })
  }

  if (typeof options === 'string') {
    path += '/' + options
  }

  const result = fetchAPI(path, { signal })
  return result
}

export default queryFn
