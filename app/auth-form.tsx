'use client'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AuthForm() {
    const supabase = createClientComponentClient()
  
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        showLinks={false}
        providers={["google", "twitter", "discord"]}
        redirectTo='http://localhost:3000/auth/callback'
      />
    )
  }