import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <SignUp afterSignInUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL} redirectUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL}/>
}
