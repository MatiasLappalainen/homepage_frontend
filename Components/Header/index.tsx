import React from 'react';
import Link from 'next/Link';

type HeaderType = {
    items: {
        href: string
        name: string
    }[];
}

const Header = ({items}: HeaderType) => {
    return (
        <div className="header">
            <ul>
            {items.map(({href, name}) => (
                <li className="header-item"><Link href={href}>{name}</Link></li>
            ))}
            </ul>
        <style jsx>{`
            .header {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 80px;
                background-color: #ddd
            }

            ul {
                height: 100%;
                margin: 0;
                display: flex;
                align-items: center;
            }

            li {
                display: inline;
                margin: 10px;
            }
        `}</style>
        </div>
    )
}

export { Header }