// Sigin In page (Not needed yet)
import { getCsrfToken } from "next-auth/react";

export default function SignIn({ csrfToken }) {
  return "Sign In Page";
  //     <div>
  //       <form action="/api/auth/callback/credentials" method="POST">
  //         <input type="hidden" name="csrfToken" value={csrfToken} />
  //         <div>
  //           <label htmlFor="input-username-for-credentials-provider">
  //             Email
  //           </label>
  //           <input
  //             name="username"
  //             id="input-username-for-credentials-provider"
  //             type="text"
  //             placeholder="user@example.com"
  //             label="Email"
  //           />
  //         </div>
  //         <div>
  //           <label htmlFor="input-password-for-credentials-provider">
  //             Password
  //           </label>
  //           <input
  //             name="password"
  //             id="input-password-for-credentials-provider"
  //             type="password"
  //             placeholder=""
  //             label="Password"
  //           />
  //         </div>
  //         <button type="submit">Sign in with Email</button>
  //       </form>
  //     </div>
  //     <div>
  //       <form action="/api/auth/signin/google" method="POST">
  //         <input type="hidden" name="csrfToken" value={csrfToken} />
  //         <input type="hidden" name="callbackUrl" value="/profile" />
  //         <button type="submit">Sign in with Google</button>
  //       </form>
  //     </div>
  //   </div>
  // );
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
