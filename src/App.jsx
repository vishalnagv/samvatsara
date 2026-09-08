import { useState, useMemo } from 'react'

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const WEEKDAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function getMonthGrid(year, month) {
  // month is 0-indexed
  const firstOfMonth = new Date(year, month, 1)
  const startWeekday = firstOfMonth.getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month, 0).getDate()

  const cells = []

  // leading days from previous month
  for (let i = startWeekday - 1; i >= 0; i--) {
    cells.push({ day: daysInPrevMonth - i, current: false })
  }
  // days in current month
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, current: true })
  }
  // trailing days from next month to fill last week
  while (cells.length % 7 !== 0) {
    cells.push({ day: cells.length - (startWeekday + daysInMonth) + 1, current: false })
  }

  return cells
}

export default function App() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())

  const cells = useMemo(() => getMonthGrid(year, month), [year, month])

  function goToPrevMonth() {
    if (month === 0) {
      setMonth(11)
      setYear(y => y - 1)
    } else {
      setMonth(m => m - 1)
    }
  }

  function goToNextMonth() {
    if (month === 11) {
      setMonth(0)
      setYear(y => y + 1)
    } else {
      setMonth(m => m + 1)
    }
  }

  function goToToday() {
    setYear(today.getFullYear())
    setMonth(today.getMonth())
  }

  const isToday = (day, current) =>
    current &&
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear()

  return (
    <div className="calendar-app">
      <div className="calendar-card">
        <div className="calendar-header">
          <button onClick={goToPrevMonth} aria-label="Previous month">‹</button>
          <div className="calendar-title">
            <h1>{MONTH_NAMES[month]} {year}</h1>
            <button className="today-btn" onClick={goToToday}>Today</button>
          </div>
          <button onClick={goToNextMonth} aria-label="Next month">›</button>
        </div>

        <div className="calendar-grid weekday-row">
          {WEEKDAY_NAMES.map(w => (
            <div key={w} className="weekday-cell">{w}</div>
          ))}
        </div>

        <div className="calendar-grid">
          {cells.map((cell, i) => (
            <div
              key={i}
              className={
                'day-cell' +
                (cell.current ? '' : ' faded') +
                (isToday(cell.day, cell.current) ? ' today' : '')
              }
            >
              {cell.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
