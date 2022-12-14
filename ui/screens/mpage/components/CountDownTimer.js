import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import {useCountdown} from '../../../../hooks/useCountdown';

class ExpiredNotice extends React.PureComponent {
  render() {
    return (
      <View>
        <Text>Expired!!!</Text>
        <Text>Please select a future date and time.</Text>
      </View>
    );
  }
}

class ShowCounter extends React.PureComponent {
  render() {
    const {days, hours, minutes, seconds} = this.props;

    return (
      <View style={styles.container}>
        <DateTimeDisplay
          value={days}
          type={strings.days}
          isDanger={days <= 3}
        />
        <DateTimeDisplay value={hours} type={strings.hours} isDanger={false} />
        <DateTimeDisplay
          value={minutes}
          type={strings.minutes}
          isDanger={false}
        />
        <DateTimeDisplay
          value={seconds}
          type={strings.seconds}
          isDanger={false}
        />
      </View>
    );
  }
}

const CountdownTimer = ({targetDate}) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

const DateTimeDisplay = ({value, type, isDanger}) => {
  return (
    <View style={styles.timerContainer}>
      <View style={styles.timerDisplay}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
          {value.toString().length == 1 ? '0' + value : value}
        </Text>
      </View>
      <Text style={{color: 'white'}}>{type}</Text>
    </View>
  );
};

export default CountdownTimer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    height: 69,
    paddingStart: 16,
    backgroundColor: 'black',
  },
  timerContainer: {
    alignItems: 'center',
    marginHorizontal: 2,
  },
  timerDisplay: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 38,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginBottom: 4,
    borderRadius: 5,
    backgroundColor: 'gray',
  },
});

let strings = new LocalizedStrings({
  'zh-cn': {
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  },
  th: {
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  },
  en: {
    days: 'Days',
    hours: 'Hours',
    minutes: 'Mins',
    seconds: 'Secs',
  },
});
