export function Card({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <div
      className="card text-white bg-dark mb-3 mx-auto"
      style={{
        width: '16rem',
        padding: '0.5rem',
        margin: '1rem',
        overflow: 'auto',
      }}
    >
      <div className="card-body">
        <div className="card-text">{children}</div>
      </div>
    </div>
  )
}
