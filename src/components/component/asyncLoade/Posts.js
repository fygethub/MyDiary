import React, { PropTypes } from 'react'

const Posts = ({ posts}) => (
    <ul>
        {
            posts.map((post, i) =>
                <li key={i}>
                    {post.title}
                </li>
            )
        }
    </ul>
)

Posts.propTypes = {
    posts: PropTypes.arrayOf.isRequired
}

export default Posts;