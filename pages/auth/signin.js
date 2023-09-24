// Sigin In page (Not needed yet)
import { getCsrfToken } from "next-auth/react";

export default function SignIn({ csrfToken }) {
 return "Sign In Page";
  // return (
  //   <div>
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
  //           <input
  //             type="checkbox"
  //             id="squareCheckbox"
  //             className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-200"
  //           />
  //           <label for="squareCheckbox" class="text-gray-800">
  //             Square Checkbox
  //           </label>
  //           <label htmlFor="input-campus-ambassador-for-credentials-provider">
  //             Referral code
  //           </label>
  //           <input
  //             name="refcode"
  //             id="input-campus-ambassador-for-credentials-provider"
  //             type="refcode"
  //             placeholder=""
  //             label="refcode"
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
