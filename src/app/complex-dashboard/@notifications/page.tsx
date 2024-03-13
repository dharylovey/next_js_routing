import Card from '@/components/Card'
import React from 'react'
import Link from 'next/link'

const Notifications = () => {
  return (
    <Card>
      <p>Notification</p>
      <Link href={'/complex-dashboard/archived'}>Archived</Link>
    </Card>
  )
}

export default Notifications
