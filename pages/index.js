import gsap from 'gsap';
import { client } from '../libs/client';
import Card from '../components/card';
import Pickup from '../components/pickup';
import styles from '../styles/Home.module.scss';


export default function Home({blog}) {
  // console.log(useRef);
  // const boxRef = useRef();
  return (
    <>
      <h1 className={styles.title}>Jamstack website with Next.js </h1>
      <div className={styles.pickup}>
        <Pickup />
      </div>
      <ul className={styles.list}>
        {
          blog.map((blog) => {
            return (
              <li key={blog.id}>
                <Card
                  title={blog.title}
                  href={`blog/${blog.id}`}
                  thumbnail={blog.thumbnail}
                  />
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

