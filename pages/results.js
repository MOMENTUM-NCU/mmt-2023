const winnerPos = ["(Special Mention)", "🥇", "🥈", "🥉"];

const getTable = (eventName, eventData, key) => {
  return (
    <div
      key={key}
      className="card w-96 mx-auto m-5 bg-neutral text-neutral-content"
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title">{eventName}</h2>
        <div className="text-left p-2">
          {eventData.map((data, idx) => (
            <p key={idx} className="text-lg">
              <span className="mr-2 text-2xl">{winnerPos[data.pos]}</span>
              {data.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Result() {
  const resultOnStage = getResultJsonOnStage();
  const eventNamesOnStage = Object.keys(resultOnStage);

  const resultOffStage = getResultJsonOffStage();
  const eventNamesOffStage = Object.keys(resultOffStage);

  return (
    <div className="h-full min-h-screen py-[80px] bg-[#2a303c]">
      <div className="text-center text-gray-200 mt-8 pb-5 text-3xl">
        Download Results
      </div>
      <div className="mx-auto w-max">
        <a href="https://drive.google.com/file/d/1JLZi-BJlN8X8pTbkogY_jHPNKGrV8us1/view">
          <div className="btn btn-success mr-5 w-max">Onstage</div>
        </a>
        <a href="https://drive.google.com/file/d/1Z8SGZXDzupqgLFIGsu57RZ_vXA9Ja-lN/view">
          <div className="btn btn-success ml-5 w-max">Offstage</div>
        </a>
      </div>
      <div className="text-center text-gray-200 mt-8 pb-5 text-3xl">
        OnStage Results
      </div>
      {eventNamesOnStage.map((name, idx) =>
        getTable(name, resultOnStage[name], idx)
      )}
      <div className="text-center text-gray-200 mt-8 pb-5 text-3xl">
        Offstage Results
      </div>
      {eventNamesOffStage.map((name, idx) =>
        getTable(name, resultOffStage[name], idx)
      )}
    </div>
  );
}

const getResultJsonOnStage = () => {
  const result = {
    "Merengue (Couple Dance)": [
      {
        pos: 1,
        name: "DN Group",
      },
      {
        pos: 2,
        name: "IGNOU",
      },
      {
        pos: 3,
        name: "Sensation Western",
      },
    ],
    "Iktaara (Solo Singing)": [
      {
        pos: 1,
        name: "Shubhangi Sharma",
      },
      {
        pos: 2,
        name: "Prateek Setia",
      },
      {
        pos: 3,
        name: "Tanya Dahiya",
      },
    ],
    "Off The Hook (Solo Rap)": [
      {
        pos: 1,
        name: "Anubhav Tyagi",
      },
      {
        pos: 1,
        name: "Priyansh Dahiya",
      },
      {
        pos: 2,
        name: "Vishal Malik",
      },
      {
        pos: 3,
        name: "Ganesh Bhagat",
      },
    ],
    "Ft. Sarcasm (Standup)": [
      {
        pos: 1,
        name: "Vishesh Kaushik",
      },
      {
        pos: 2,
        name: "Lakshay Gupta",
      },
      {
        pos: 3,
        name: "Aryan Brar",
      },
    ],
    "Threadmill (Inter University Fashion Show)": [
      {
        pos: 1,
        name: "Nakshatra",
      },
      {
        pos: 2,
        name: "Galore",
      },
      {
        pos: 3,
        name: "House of Kairos",
      },
    ],
    "Mr. Fresher": [
      {
        pos: 1,
        name: "Kartik Yadav",
      },
      {
        pos: 1,
        name: "Nikhil Sheoran",
      },
    ],
    "Ms. Fresher": [
      {
        pos: 1,
        name: "Lavanya Sharma",
      },
    ],
    "Haute Couture (Intra University Fashion Show) (M)": [
      {
        pos: 1,
        name: "Bhoumik Mutreja",
      },
      {
        pos: 1,
        name: "Sagar Gandhi",
      },
      {
        pos: 2,
        name: "Anubhav Tyagi",
      },
      {
        pos: 3,
        name: "Yash Dagar",
      },
    ],
    "Haute Couture (Intra University Fashion Show) (F)": [
      {
        pos: 1,
        name: "Gaurja Kochhar",
      },
      {
        pos: 2,
        name: "Riya Singh",
      },
      {
        pos: 3,
        name: "Ashneet Kaur",
      },
    ],
    "Nrityanjali (Group Dance)": [
      {
        pos: 1,
        name: "RAW",
      },
      {
        pos: 2,
        name: "V Defyn",
      },
      {
        pos: 3,
        name: "Hypnotics",
      },
    ],
    "Groove (Solo Dance)": [
      {
        pos: 1,
        name: "Sarvagya Sharma",
      },
      {
        pos: 2,
        name: "Sakshi Ahuja",
      },
      {
        pos: 3,
        name: "Anoushka Sardana",
      },
    ],
    "Taraana (Group Singing)": [
      {
        pos: 1,
        name: "Orpheus",
      },
      {
        pos: 2,
        name: "Euphony",
      },
      {
        pos: 3,
        name: "Tarangna",
      },
    ],
    "Battle of Bands": [
      {
        pos: 0,
        name: "Moksha",
      },
    ],
  };
  return result;
};

const getResultJsonOffStage = () => {
  const result = {
    "Chase to the cut": [
      {
        pos: 1,
        name: "Aryan Jain(NCU)",
      },
    ],
    "Battle of Design": [
      {
        pos: 1,
        name: "Khyati Dhawan(NCU)",
      },
      {
        pos: 2,
        name: "Tanya Bhardwaj(Dronacharya)",
      },
    ],
    "Mad Ads": [
      {
        pos: 1,
        name: "Garima Jaiswal(NCU)",
      },
      {
        pos: 1,
        name: "Radhika Arora(NCU)",
      },
      {
        pos: 2,
        name: "Pratyush Sehwag(NCU)",
      },
      {
        pos: 2,
        name: "Abhipriya Rathee(NCU)",
      },
      {
        pos: 2,
        name: "Satvik Gahlot(NCU)",
      },
    ],
    Pictureseque: [
      {
        pos: 1,
        name: "Vrinda(NCU)",
      },
      {
        pos: 2,
        name: "Arshi Nakra(Poornima University)",
      },
    ],
    "Flameless Cooking": [
      {
        pos: 1,
        name: "Shiny Singh(NCU)",
      },
      {
        pos: 1,
        name: "Tanishka Sharma(NCU)",
      },
      {
        pos: 2,
        name: "Tanisha Malik(NCU)",
      },
    ],
    "Clash Royale": [
      {
        pos: 1,
        name: "Rannveer Gahlaut(NCU)",
      },
      {
        pos: 2,
        name: "Mehul Sharma(NCU)",
      },
    ],
    "Bollywood Quiz": [
      {
        pos: 1,
        name: "Aashna Bansal(NCU)",
      },
      {
        pos: 2,
        name: "Aditi Jha(NCU)",
      },
    ],
    "Treasure Hunt": [
      {
        pos: 1,
        name: "Sourish Aggarwal(Day1)(NCU)",
      },
      {
        pos: 1,
        name: "Sahil Verma(Day2)(NCU)",
      },
    ],
    "COD M": [
      {
        pos: 1,
        name: "Akshat Singh",
      },
      {
        pos: 2,
        name: "Nischal Sharma(NCU)",
      },
    ],
    "Brain Studio": [
      {
        pos: 1,
        name: "Apoorva Rangaraju(NCU)",
      },
      {
        pos: 2,
        name: "Dhruv Bhateja(NCU)",
      },
    ],
    "Speed Typing": [
      {
        pos: 1,
        name: "Deepanshu Yadav(NCU)",
      },
      {
        pos: 2,
        name: "Harsh Khatri(NCU)",
      },
    ],
    "Wall Painting": [
      {
        pos: 1,
        name: "Tanmay Kumar(NCU)",
      },
      {
        pos: 2,
        name: "Teesha(NCU)",
      },
    ],
    "Face Painting": [
      {
        pos: 1,
        name: "Deepanshu Kataria(NCU)",
      },
      {
        pos: 2,
        name: "Deepali Meena (Daulat Ram College)",
      },
    ],
    "Tug Of War": [
      {
        pos: 1,
        name: "Aryan Singh(NCU)",
      },
    ],
    "IPL Auction": [
      {
        pos: 1,
        name: "Raghav Vats(NCU)",
      },
      {
        pos: 2,
        name: "Aryan Brar(NCU)",
      },
    ],
    "Arthargument 4.0": [
      {
        pos: 1,
        name: "Fatehvir Singh(NCU)",
      },
      {
        pos: 2,
        name: "Aayush Kumar(NCU)",
      },
    ],
    "IT Quiz": [
      {
        pos: 1,
        name: "Aryan Mann(NCU)",
      },
      {
        pos: 2,
        name: "Tanisha Yadav(NCU)",
      },
    ],
    "Push Ups": [
      {
        pos: 1,
        name: "Lakshay Attri(NCU)",
      },
      {
        pos: 2,
        name: "Yash Sahu(NCU)",
      },
    ],
    Squats: [
      {
        pos: 1,
        name: "Deepanshu Mehra(NCU)",
      },
      {
        pos: 2,
        name: "Viraj Yadav(NCU)",
      },
    ],
    "Beach Volleyball": [
      {
        pos: 1,
        name: "Gaurav Yadav(NCU)",
      },
      {
        pos: 1,
        name: "Honey Yadav(NCU)",
      },
      {
        pos: 2,
        name: "Sahil(NCU)",
      },
      {
        pos: 2,
        name: "Ankush Yadav(NCU)",
      },
    ],
    Basketball: [
      {
        pos: 1,
        name: "Aditya Chaudhary(NCU)",
      },
      {
        pos: 2,
        name: "Naman Jhangaria(NCU)",
      },
    ],
    "Table Tennis Team": [
      {
        pos: 1,
        name: "Sarvagya Vidyarthi(Sushant University)",
      },
      {
        pos: 1,
        name: "Utkrist Katyal(Jamia Milia)",
      },
      {
        pos: 2,
        name: "Mayank(NCU)",
      },
      {
        pos: 2,
        name: "Tushar(NCU)"
      },
    ],
    "Table Tennis Individual": [
      {
        pos: 1,
        name: "Sarvagya Vidyarthi(Sushant University)",
      },
      {
        pos: 2,
        name: "Anubhav Agarwal(NCU)"
      },
    ],
    "Stock Trading competition": [
      {
        pos: 1,
        name: "Parth(NCU)",
      },
      {
        pos: 2,
        name: "Tanishka Jain(NCU)"
      },
    ],
    Valorant: [
      {
        pos: 1,
        name: "Team Bankai(External)",
      },
    ],
    "Blind Fold": [
      {
        pos: 1,
        name: "Akshat Yadav(NCU)",
      },
    ],
    "Traffic Jam": [
      {
        pos: 1,
        name: "Joji P joy(NCU)",
      },
    ],
  };
  return result;
};
