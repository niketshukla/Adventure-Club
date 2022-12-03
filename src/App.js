import MemberList from "./components/MemberList";
import "./styles.css";

const outdoorAdventure = [
  {
    id: 1,
    name: "Sid",
    age: 33,
    rating: 1,
    activities: ["Running", "Hiking", "Biking"],
  },
  {
    id: 2,
    name: "Nik",
    age: 28,
    rating: 5,
    activities: ["Hiking"],
  },
  {
    id: 3,
    name: "Kri",
    age: 45,
    rating: 2,
    activities: ["Hiking", "Biking"],
  },
  {
    id: 4,
    name: "Amit",
    age: 49,
    rating: 3,
    activities: ["Running", "Biking"],
  },
  {
    id: 5,
    name: "Kavi",
    age: 27,
    rating: 1,
    activities: ["Running"],
  },
  {
    id: 6,
    name: "Arsh",
    age: 19,
    rating: 4,
    activities: ["Running", "Hiking", "Biking"],
  },
];

export default function App() {
  return (
    <div className="App">
      <MemberList data={outdoorAdventure} />
    </div>
  );
}
