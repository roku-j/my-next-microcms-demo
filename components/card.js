import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/components/Card.module.scss';


export default function Card({title,href,thumbnail}) {
    const  _thumbnailUrl = thumbnail ? `${thumbnail.url}?fm=webp&max-w=600&max-h=400` : '/dummy.png';
    const _thumbnailWidth = 600;
    const _thumbnailHeight = 400;
    return (
        <article className={styles.card}>
            <Link href={href}>
                <a>
                    <figure className={styles.card__thumb}>
                        <Image src={_thumbnailUrl} width={_thumbnailWidth} height={_thumbnailHeight} />
                    </figure>
                    <p className={styles.card__title}>{title}</p>
                </a>
            </Link>
        </article>
    )
}
