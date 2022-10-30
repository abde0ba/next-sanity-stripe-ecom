import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdOutlineCancel } from 'react-icons/md';

const Cancelled = () => {
  return (
    <div className='success-wrapper'>
    <div id="cancel" className='success'>
        <p className='icon'>
            <MdOutlineCancel />
        </p>
        <h2>Opps!, something went wrong your order got cancelled</h2>
        
        <Link href='/'>
            <button type='button' width='300px' className='btn'>
                try again
            </button>
        </Link>
    </div>
</div>
  )
}

export default Cancelled