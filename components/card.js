import Link from 'next/link';
import Image from 'next/image';


export default function Card({title,href,thumbnail}) {        
    if (!thumbnail) return;
    return (
        <article>
            <Link href={href}>
                <a>
                    <figure>
                        {/* <Image src={thumbnail.url} width={thumbnail.width} height={thumbnail.height} /> */}
                    </figure>
                    <p>{title}</p>
                </a>
            </Link>
        </article>
    )
}