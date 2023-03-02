import { useState } from "react"

export default function useVisitor() {
  const visited = []
  const [isPostLiked, setIsPostLiked] = useState([])

  const visitor = {
    id: 0,
    like: function(post) {
      setIsPostLiked(prevLikedPosts => {
        if (prevLikedPosts.find(({ slug }) => slug !== post.slug)) {
          post.like(this)
          return [...prevLikedPosts, post]
        }
        return prevLikedPosts
      })
    },
    dislike: function(post) {
      setIsPostLiked(prevLikedPosts => {
        if (prevLikedPosts.find(({ slug }) => slug === post.slug)) {
          post.dislike(this)
          return [...prevLikedPosts].filter(({ slug }) => slug !== post.slug)
        }
        return prevLikedPosts
      })
    },
    visualize: function(post) {
      if (!visited.find(({ slug }) => slug === post.slug)) {
        visited.push(post)
        post.visualize(this)
      }
    },
  }

  visitor.like.bind(visitor)
  visitor.dislike.bind(visitor)
  visitor.visualize.bind(visitor)

  return visitor
}
