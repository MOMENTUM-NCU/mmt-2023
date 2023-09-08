import EditProfile from "./EditProfile";

export default function Account({ user }) {
  return (
    <>
      <div className="px-5 pb-24 mx-auto flex items-start flex-wrap justify-around">
        <EditProfile user={user} />
      </div>
    </>
  );
}
