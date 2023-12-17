'use client'

import { generateToken } from '@/components/token/page'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export function Guest() {
    
    useEffect(() => {
        const token = Cookies.get('token')
        const guestId = localStorage.getItem('guestId');
        if(!token && !guestId) {
            localStorage.setItem('guestId', generateToken(20));
        }

      }, []);
      return <></>
}