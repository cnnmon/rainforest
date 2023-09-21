
export default function AsciiArt({ model, css }: { model: string, css?: React.CSSProperties }) {
  const lines = model.split('\n')

  return (
    <div className="ascii-art" style={{ ...css }}> 
      {lines.map((line, key) => {
        const chars = line.split('')
        return (
          <p key={key} className="white-space-pre">
            {chars.map((char, k) => {
              return (
                <span key={k}>
                  {char == ' ' ? (
                    <>&nbsp;</>
                  ): (
                    <>{char}</>
                  )}
                </span>
              )
            })}
          </p>
        )
      })}
    </div>
  )
}