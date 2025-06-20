import React, { useEffect, useState } from 'react'
import appWriteService from '../APPwrite/config'
import { Container , PostCard } from '../components'

function AllPosts() {

    cosnt [posts , setPosts] = useState([])

    useEffect(() => {

    } , [])

    appWriteService.getAllPost([]).then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    })

  return (
    <div className='w-full py-8'>

        <Container>

            <div className='flex flex-wrap'>

                {
                posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard post={post}/>
                    </div>
                ))
                }

            </div>

        </Container>

    </div>
  )
}

export default AllPosts
