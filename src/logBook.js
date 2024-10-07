// import logs from "./Log";
// just using log object here for now
const logs = [
  {
    key: "1",
    dateAccomplished: "2024-09-16",
    workDone: "Created Website",
    membersParticipated: "Russell",
  },
  {
    key: "2",
    dateAccomplished: "2024-09-17",
    workDone:
      "Researched avalible professors from MME, ECE, BME, SYDE, and Optomitry to see who could possibly help us and provide more information.",
    membersParticipated: "All Team members",
  },
  {
    key: "3",
    dateAccomplished: "2024-09-20",
    workDone: "Updated website to use react and implemnted a log book",
    membersParticipated: "Harsimrat",
  },
  {
    key: "4",
    dateAccomplished: "2024-09-27",
    workDone:
      "Researched and came up with 4 possible solutions as well as 3 Patents",
    membersParticipated: "All Team members",
  },
  {
    key: "5",
    dateAccomplished: "2024-10-4",
    workDone: "Started research into AI models and tech required for project",
    membersParticipated: "Russell",
  },
  {
    key: "6",
    dateAccomplished: "2024-10-6",
    workDone: "Had a in person meeting to discuss best solution",
    membersParticipated: "All Team members",
  },
  {
    key: "7",
    dateAccomplished: "2024-10-6",
    workDone: "Reached out to professors in school of optomitry",
    membersParticipated: "Selvin",
  },
  {
    key: "8",
    dateAccomplished: "2024-10-6",
    workDone: "Started to apply to Awards",
    membersParticipated: "Timothy",
  },
];

// turn all entry data into a div
const LogEntries = ({ logs }) => (
  <div className="Log-Book-Entries">
    {logs.map((log) => (
      <div className="Log-Book-Entry" key={log.key}>
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
