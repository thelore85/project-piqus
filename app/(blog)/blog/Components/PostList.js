import React from 'react'
import PostCard from './PostCard'

export default function PostList() {
  return (
    <div className="container my-5 p-3">
      <div className="row">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  )
}
