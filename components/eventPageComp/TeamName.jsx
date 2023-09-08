import { useEffect, useState } from "react";

export default function TeamName({ prevName, eventId }) {
  const [teamName, setTeamName] = useState("");
  const updateTeamName = async () => {
    const response = await fetch("/api/user/ticket/update/" + eventId, {
      method: "POST",
      body: JSON.stringify({ teamName }),
    });
    const userDetail = await response.json();
    location.reload();
  };
  useEffect(() => {
    setTeamName(prevName);
  }, [prevName]);

  return (
    <>
      <div className="flex justify-center items-end flex-wrap sm:flex-nowrap">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Team Name</span>
          </label>
          <label className="input-group">
            <span>Team</span>
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="input input-bordered"
            />
          </label>
        </div>
        <button onClick={updateTeamName} className="btn mt-3 ml-3 btn-primary">
          Update
        </button>
      </div>
    </>
  );
}
