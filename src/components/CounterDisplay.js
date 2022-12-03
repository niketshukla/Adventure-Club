export default function CounterDisplay({ hiking, biking, running }) {
  return (
    <div>
      <h4>Count of members in specific activity</h4>
      <p>
        Hiking: {hiking}, Biking: {biking}, Running: {running}
      </p>
    </div>
  );
}
