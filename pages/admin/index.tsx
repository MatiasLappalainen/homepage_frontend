import React from 'react';
import Link from 'next/Link';
import { Header } from '../../Components/Header';

const Admin = () => {

    const routes = [
        {
            href: "/admin/projects",
            name: 'Projects'
        },
        {
            href: "/admin/users",
            name: 'Users'
        }
    ]

    return (
        <div>
            <Header items={routes} />
        </div>
    )
}

export default Admin;