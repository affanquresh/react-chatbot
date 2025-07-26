import { useEffect, useState } from 'react';
import { checkHeading, replaceHeading, formatBoldText, removeSurroundingDoubleAsterisks } from '../helper';

export const Answer = ({ ans, index, totalResult }) => {
  const [heading, setHeading] = useState(false)
  const [answer, setAnswer] = useState([])

  useEffect(() => {
    if(checkHeading(ans)) {
      setHeading(true)
      setAnswer([{ text: replaceHeading(ans), isBold: false }])
    } else {
      setAnswer(formatBoldText(ans))
    }
  }, [ans])

  return (
    <>
      {index === 0 && totalResult > 1 ? (
        <span className='text-3xl text-left text-cyan-400 font-bold block mb-4'>
          {answer.map((part, i) => (
            <span key={i} className={part.isBold ? 'font-bold' : ''}>
              {part.text}
            </span>
          ))}
        </span>
      ) : heading ? (
        <span className='text-xl text-cyan-500 text-left font-bold block mb-2'>
          {answer.map((part, i) => (
            <span key={i} className={part.isBold ? 'font-extralight' : ''}>
              {part.text}
            </span>
          ))}
        </span>
      ) : (
        <span className='text-s font-light text-left pl-4'>
          {answer.map((part, i) =>
            part.isBold ? (
              <span key={i} className="font-bold text-xl text-zinc-200">{part.text}</span>
            ) : (
              <span key={i}>{removeSurroundingDoubleAsterisks(part.text)}</span>
            )
          )}
        </span>
      )}
    </>
  )
}