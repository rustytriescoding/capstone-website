// import logs from "./Log";
// just using log object here for now
const logs = [
  {
    dateAccomplished: "2024-09-16",
    workDone: "Created Website",
    membersParticipated: ["Russell"],
  },
  {
    dateAccomplished: "2024-09-17",
    workDone:
      "Researched avalible professors from MME, ECE, BME, SYDE, and Optomitry to see who could possibly help us and provide more information.",
    membersParticipated: ["All Team members"],
  },
  {
    dateAccomplished: "2024-09-20",
    workDone: "Updated website to use react and implemnted a log book",
    membersParticipated: ["Harsimrat"],
  },
];

// turn all entry data into a div
const LogEntries = ({ logs }) => (
  <div className="Log-Book-Entries">
    {logs.map((log) => (
      <div className="Log-Book-Entry">
        <p className="Log-Book-Entry-Date">{log.dateAccomplished}</p>
        <p className="Log-Book-Entry-Content">{log.workDone}</p>
        <p className="Log-Book-Entry-participents">
          {"- " + log.membersParticipated}
        </p>
      </div>
    ))}
  </div>
);

// render log book
function LogBook() {
  return (
    <div className="Log-Book">
      <h1 className="Log-Book-Title">Project Log Book</h1>
      <LogEntries logs={logs} />
    </div>
  );
}

export default LogBook;
