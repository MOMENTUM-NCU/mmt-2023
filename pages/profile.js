import { useSession } from "next-auth/react";
import Account from "../components/Account";
import ProfileUpdate from "@/components/ProfileUpdate";
import Spinner from "@/components/Spinner";

export default function Profile() {
  // const { user, error, isLoading } = useUser();
  const { data: session, status } = useSession();

  if (status === "loading")
    return (
      <div className="h-full min-h-screen w-screen grid place-items-center backdrop-blur">
        <Spinner />
      </div>
    );

  // const isMobile =  ? false : true;
  if (session) {
    let user = session.user;
    return (
      <div className="bg-profile bg-gray-700 max-w-full min-h-[100vh]">
        <div className="pt-20">
          <ProfileUpdate user={user} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-full min-w-screen min-h-screen flex flex-col justify-center items-center bg-[#332851]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-9xl sm:text-[15vw] font-bold text-[#ca3074] leading-none">
            403
          </h1>
          <h2 className="uppercase text-[#ca3074] font-bold text-base sm:text-3xl">
            Access Forbidden
          </h2>
        </div>
      </div>
    );
  }
}
