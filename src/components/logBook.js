import LogBookData from "../project_Data/LogBookData";
import BuildLogData from "../project_Data/BuildLogData";

// turn all entry data into a div
const LogEntries = ({ logs }) => (
  <div className="Log-Entries">
    {logs.map((log) => (
      <div className="Log-Entry" key={log.key}>
        <p className="Log-Entry-Date">{log.dateAccomplished}</p>
        <p className="Log-Entry-Content">{log.workDone}</p>
        <p className="Log-Entry-participents">
          {"- " + log.membersParticipated}
        </p>
      </div>
    ))}
  </div>
);

// render log book
function LogBook({ title }) {
  // Order items from newest at the top to oldest at the bottom
  LogBookData.sort(
    (a, b) => new Date(b.dateAccomplished) - new Date(a.dateAccomplished)
  );
  BuildLogData.sort(
    (a, b) => new Date(b.dateAccomplished) - new Date(a.dateAccomplished)
  );
  return (
    <div className="Log">
      <h1 className="Log-Title">{title}</h1>
      <LogEntries logs={title === "Log Book" ? LogBookData : BuildLogData} />
    </div>
  );
}

export default LogBook;
