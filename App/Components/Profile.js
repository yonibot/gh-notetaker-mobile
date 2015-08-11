var React = require('react-native');
var Badge = require('./Badge')

var {
  Text,
  View,
  StyleSheet,
  ScrollView
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});


class Profile extends React.Component{
  humanize(phrase) {
    return phrase
        .replace(/_/g, ' ')
        .replace(/(\w+)/g, function(match) {
          return match.charAt(0).toUpperCase() + match.slice(1);
        });
  }
  render() {
    var userInfo = this.props.userInfo;
    var topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
    var list = topicArr.map((e, i) => {
      if (!userInfo[e]) {
        return <View key={i} />
      } else {
        return (
          <View key={i}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}> {this.humanize(e)} </Text>
              <Text style={styles.rowContent}> {userInfo[e]} </Text>
            </View>
          </View>
        )
      }
    })
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={userInfo} />
        {list}
      </ScrollView>
    )
  }
};

module.exports = Profile;
