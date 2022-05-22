import { client } from '../../libs/client';
import styles from '../../styles/Home.module.scss';

export default function BlogId({blog}) {    
    return (
        <>
            <article>
                <header>
                    <h1 className={styles.title}>{blog.title}</h1>
                    <p className={styles.publishedAt}><time>{blog.publishedAt}</time></p>
                </header>                
                <div className={styles.post} dangerouslySetInnerHTML={{
                    __html: blog.body
                }} />
            </article>
        </>
    )

}

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: 'blog' });
    const paths = data.contents.map((content) => `/blog/${content.id}`);
    return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });
    return {
        props: {
            blog: data
        }
    }
}

