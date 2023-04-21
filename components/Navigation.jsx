import React from "react";
import Link from "next/link";

export const Navigation = () => {
  return (
    <ul>
      <li>
        <Link href="/" className='my-link'>Home</Link>
      </li>
      <li>
        <Link href="/about" className='my-link'>About</Link>
      </li>
      <li>
        <Link href="/services" className='my-link'>Services</Link>
      </li>
      <li>
        <Link href="/users" className='my-link'>Users</Link>
      </li>
      <li>
        <Link href="/contact-us" className='my-link'>Contact</Link>
      </li>
    </ul>
  );
};
