import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import DbContext from './DbContext';


class Items extends React.Component {
  state = {
    items: null
  };

  componentDidMount() {
    this.update();
  }

  render() {
    const { done: doneHeading } = this.props;
    const { items } = this.state;
    const heading = doneHeading ? "Completed" : "Todo";

    if (items === null || items.length === 0) {
      return null;
    }

    return (
     
          <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeading}>{heading}</Text>
          {items.map(({ id, done, value }) => (
            <TouchableOpacity
              key={id}
              onPress={() => this.props.onPressItem && this.props.onPressItem(id)}
              style={{
                backgroundColor: done ? "#1c9963" : "#fff",
                borderColor: "#000",
                borderWidth: 1,
                padding: 8
              }}
            >
              <Text style={{ color: done ? "#fff" : "#000" }}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        )
      }
  

  update() {
    this.props.db.transaction(tx => {
      tx.executeSql(
        `select * from items where done = ?;`,
        [this.props.done ? 1 : 0],
        (_, { rows: { _array } }) => this.setState({ items: _array })
      );
    });
  }
}

export default React.forwardRef((props, ref) => (
  <DbContext.Consumer>
    {context => (<Items {...props} db={context.db} ref={ref}/>)}
  </DbContext.Consumer>
));
