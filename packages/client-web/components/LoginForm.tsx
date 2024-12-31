'use client'
import { signIn, useSession } from 'next-auth/react'
import { Button, Typography } from '@mui/material'

type Props = {}

export default function LoginForm({}: Props) {
  const session = useSession()
  const handleSubmit = async () => {
    await signIn('credentials', {
      username: 'bob@example.com',
      password: 'xxxxx',
    })
  }

  if (session.status === 'loading') return <h1>Loading...</h1>

  console.log(session)
  return (
    <>
      <Typography variant='h1'>
        {session?.data ? 'Yooo jsi prihlaseny' : 'NEsi prihlaseny'}
      </Typography>

      <Button onClick={handleSubmit}>Sign in</Button>
    </>
  )
}
