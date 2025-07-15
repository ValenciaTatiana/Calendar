import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';
import { NavBar } from "../"
import { getMessagesES, localizer } from '../../helpers';

const events = [{
  title: 'Cumpleaños',
  notes: 'Pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
}]

export const CalendarPage = () => {

  const eventStyleGetter = (e, start, end, isSelected) => {
    console.log({  e, start, end, isSelecte d })

    const style = {
      backgroundColor: '#347cf7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    }

    return {
      style
    }
  }
  return (
    <>
      <NavBar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100dvh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
      />
    </>
  )
}