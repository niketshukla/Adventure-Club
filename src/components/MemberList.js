import CounterDisplay from "./CounterDisplay";
import Rating from "./Rating";
import "./MemberList.css";
import { useState } from "react";

export default function MemberList({ data }) {
  const [members, setMembers] = useState(data);
  const [query, setQuery] = useState("");
  const [activityFilter, setActivityFilter] = useState("All");

  const membersFiltered = members.filter((member) => {
    return (
      member.name.toLowerCase().includes(query.toLowerCase()) &&
      (activityFilter === "All" || member.activities.indexOf(activityFilter) !== -1)
    );
  });

  const removeMember = (rid) => {
    setMembers(members.filter(({ id }) => id !== rid));
  };

  const calculateCounts = () => {
    let activityCounts = { running: 0, biking: 0, hiking: 0 };
    members.forEach((member) => {
      member.activities.forEach((activity) => {
        const act = activity.toLowerCase();
        activityCounts[act]++;
      });
    });
    return activityCounts;
  };

  return (
    <div>
      <h2>Outdoor Adventure Club</h2>
      <div className="filterName">
        <label htmlFor="searchNames">Search By Name: </label>
        <input
          id="searchNames"
          type="text"
          placeholder="Search Names"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div className="filterActivity">
        <label htmlFor="searchActivity">Filter by Activity: </label>
        <select
          id="searchActivity"
          value={activityFilter}
          onChange={(e) => {
            setActivityFilter(e.target.value);
          }}
        >
          <option value="All">All</option>
          <option value="Running">Running</option>
          <option value="Biking">Biking</option>
          <option value="Hiking">Hiking</option>
        </select>
      </div>
      <CounterDisplay {...calculateCounts()} />
      <table className="tableContainer">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Ratings</th>
            <th>Activities</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {membersFiltered.map(({ id, name, age, rating, activities }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{age}</td>
              <td>
                <Rating rating={rating} />
              </td>
              <td>{activities.join(", ")}</td>
              <td>
                <button
                  className="removeBtn"
                  onClick={() => {
                    removeMember(id);
                  }}
                >
                  Remove Member
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
