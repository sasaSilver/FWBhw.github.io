'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
 
const App = dynamic(() => import('../App'))
 
export function ClientOnly() {
  return <App />
}