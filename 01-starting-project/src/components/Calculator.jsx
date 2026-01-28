export default function Calculator() {
  return (
    <div className="place-content-center">
      <table className="table-auto mx-auto w-fit">
        <thead>
          <tr>
            <th>Initial Investment</th>
            <th>Annual Investment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input id="user-input"></input>
            </td>
            <td>
              <input></input>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Expected Return</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
