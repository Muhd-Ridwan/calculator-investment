/* 
Before the state was here, but we lift the state up & transfer it to App.jsx because it
will be needed in Results.jsx
*/

export default function UserInput({ onChange, input }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={input.initialInvestment}
            onChange={(event) =>
              onChange(event.target.value, "initialInvestment")
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={input.annualInvestment}
            onChange={(event) =>
              onChange(event.target.value, "annualInvestment")
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={input.expectedReturn}
            onChange={(event) => onChange(event.target.value, "expectedReturn")}
          />
        </p>
        <p>
          <label>Duration Investment</label>
          <input
            type="number"
            required
            value={input.duration}
            onChange={(event) => onChange(event.target.value, "duration")}
          />
        </p>
      </div>
    </section>
  );
}
