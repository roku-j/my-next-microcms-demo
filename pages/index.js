import Link from 'next/link';
import { client } from '../libs/client';


export default function Home({blog}) {
  return (    
    <>      
      <h1>ブログタイトル</h1>
      <ul>
        {          
          blog.map((blog) => (            
            <li key={blog.id}>            
              <Link href={`blog/${blog.id}`}>
                <a>{blog.title}</a>            
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export const getStaticProps = async () => {  
  const data = await client.get({ endpoint: "blog" });   
  return {
    props: {
      blog: data.contents
    }
  }
}

