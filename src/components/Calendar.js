import React, { Component } from 'react';
import { CalendarList } from 'react-native-calendars';
import { View } from 'react-native';
import { ELECTRIC, PEACHY, WHITE, DARK_GRAY } from '../assets/colors';

class CustomCalendar extends Component {

  render() {
    return (
      <CalendarList
  theme={{
    textMonthFontSize: 20,
    textSectionTitleColor: DARK_GRAY,
    monthTextColor: DARK_GRAY,
    selectedDayTextColor: WHITE,
    selectedDayBackgroundColor: ELECTRIC,
    todayTextColor: ELECTRIC,
    selectedDotColor: ELECTRIC,
  }}
  onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
  pastScrollRange={30}
  futureScrollRange={30}
  scrollEnabled={true}
  showScrollIndicator={true}
  markedDates={{
    '2019-02-16': { selected: true, selectedColor: PEACHY },
    '2019-02-19': { selected: true, selectedColor: PEACHY },
    '2019-02-27': { selected: true, selectedColor: PEACHY },
    '2019-02-1': { selected: true, selectedColor: PEACHY },
    '2019-03-4': { selected: true, selectedColor: PEACHY },
    '2019-03-14': { selected: true, selectedColor: PEACHY },
    '2019-02-23': { selected: true, selectedColor: PEACHY },
  }}
/>
    );
  }
}

export default CustomCalendar;
