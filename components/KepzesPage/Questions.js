export default function Questions({ questions }) {
  return (
    <div>
      {questions.map((q, i) => (
        <div key={i}>
          <h3>{q.q}</h3>
          <p>{q.a}</p>
        </div>
      ))}
    </div>
  )
}
