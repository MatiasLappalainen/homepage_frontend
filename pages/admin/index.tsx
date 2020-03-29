import React from 'react';
import Link from 'next/Link';
import { Header } from '../../Components/Header';

const Admin = () => {

    return (
    <div>
        <Header>
            <ul>
                <li>
                    <Link href="/admin/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/admin/users">Users</Link>
                </li>
            </ul>
        </Header>
    </div>
    )
}

export default Admin;