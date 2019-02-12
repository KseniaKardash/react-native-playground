import React, { Component } from 'react';
import { Calendar } from 'react-native-calendars';
import { ELECTRIC, PEACHY } from '../assets/colors';

class CustomCalendar extends Component {

  render() {
    return (
      <Calendar
        current={'2012-03-01'}
        minDate={'2012-05-10'}
        maxDate={'2012-05-30'}
        markedDates={{
        '2012-03-16': {selected: true, marked: true, selectedColor: {ELECTRIC}},
        '2012-03-17': {marked: true},
        '2012-03-18': {marked: true, dotColor: {PEACHY}, activeOpacity: 0},
        '2012-03-19': {disabled: true, disableTouchEvent: true}
      }}
      markingType={'multi-dot'}
        onDayPress={(day) => {console.log('selected day', day)}}
        onDayLongPress={(day) => {console.log('selected day', day)}}
        monthFormat={'yyyy MM'}
        onMonthChange={(month) => {console.log('month changed', month)}}
        hideArrows={true}
        renderArrow={(direction) => (<Arrow />)}
        hideExtraDays={true}
        disableMonthChange={true}
        firstDay={1}
        hideDayNames={true}
        showWeekNumbers={true}
      />
    );
  }
}

export default CustomCalendar;
