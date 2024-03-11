import { Metadata } from "next"
import { resolve } from "path"

interface Props {
  params: {
    postId: string
  }
}


export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const res = await new Promise(resolve => setTimeout(() => resolve('Blog Post'), 100))
  return {
    title: `Post ${params.postId} ${res}`
  }
}

const postId = ( {params }: {
  params: { postId: string }
}) => {
  return (
    <div className='min-h-screen flex justify-center items-center text-5xl'>
      POST {params.postId}
    </div>
  )
}

export default postId
