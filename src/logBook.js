import logs from "./project_Data/LogData";

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
