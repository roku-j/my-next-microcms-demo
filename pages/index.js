
import { client } from '../libs/client';
import Card from '../components/card';
import Pickup from '../components/pickup';
import styles from '../styles/Home.module.scss'

import gsap from 'gsap';
import { Power2} from 'gsap';
import { useEffect,useRef } from 'react';


export default function Home({blog}) {
  const titleEl = useRef();
  const pickupEl = useRef();
  const listEl = useRef();
  useEffect(() => {
    const inviewItems = [titleEl.current,pickupEl.current,listEl.current];
    const tl = gsap.timeline();
    tl
    .set(inviewItems, {
      opacity: 0,
      y: '100px'
    })
    .to(inviewItems, {
      opacity: 1,
      y: 0,
      duration: 1.6,
      ease: Power2.easeOut
    })
  })
  return (
    <>
      <h1 className={styles.title} ref={titleEl}>Jamstack website with Next.js </h1>
      <div className={styles.pickup} ref={pickupEl}>
        <Pickup />
      </div>
      <ul className={styles.list} ref={listEl}>
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

