import { getSortedPostsData } from "@/lib/posts"
import PostListItem from "./PostListItem"

export default function Posts() {
    const posts = getSortedPostsData()

    return (
        <section>
            <h2>Recent posts</h2>
            <ul>
                {posts.map(post => (
                    <PostListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}