import Link from 'next/link';
import { client } from '../libs/client';
import Card from '../components/card';


export default function Home({blog}) {    
  return (    
    <>      
      <h1>ブログタイトル</h1>
      <ul>
        {          
          blog.map((blog) => {            
            return (                
              <li key={blog.id}>
                <Card
                  title={blog.title}
                  href={`blog/${blog.id}`}                
                  thumbnail={blog.thumbnail}
                  />r                
              </li>
            )            
          })
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

