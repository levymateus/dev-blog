import { useCallback, useEffect, useState } from "react"
import useLocalStorage from "@hooks/useLocalStorage"
import useSessionStorage from "@hooks/useSessionStorage"
import { blog } from "@lib/database"
import { msToHours } from "@utils/time"
import useIsMounted from "@hooks/useIsMounted"


export default function usePost(slug) {
  const [liked, setLiked] = useLocalStorage(slug, false)
  const [visited, setVisited] = useSessionStorage(slug, null)
  const [views, setViews] = useState(1)
  const isMounted = useIsMounted()

  const like = useCallback(() => setLiked(true), [setLiked])

  const dislike = useCallback(() => setLiked(false), [setLiked])

  const visualize = useCallback(() => {
    async function visualizePost() {
      let lastVisitInHours = 8766
      if (visited) {
        const lastVisit = new Date(visited).getTime()
        lastVisitInHours = msToHours(Date.now() - lastVisit)
      }
      if (isMounted() && lastVisitInHours >= 24) {
        if ((await blog.post(slug).get.views.increment()).notFound()) {
          await blog.post(slug).add()
        }
        setVisited(new Date().toISOString())
      }
    }
    visualizePost()
  }, [isMounted, visited, setVisited, slug])

  useEffect(() => {
    async function getPostData() {
      if (isMounted()) {
        setViews(await blog.post(slug).get.views.data())
      }
    }
    getPostData()
  }, [slug, isMounted])

  return [{ liked, views }, { like, dislike, visualize }]
}
