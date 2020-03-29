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
                <li><Link href={href}>{name}</Link></li>
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
        `}</style>
        </div>
    )
}

export { Header }