'use client'

import {DiscussionEmbed} from "disqus-react"
const DisqusComments = (post: any) => {
  const disqusShortname = "http://localhost:3000"
  const disqusConfig = {
    url: "http://localhost:3000/dynamic",
    identifier: post.id,
    title: post.title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;