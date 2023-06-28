import axios from 'axios';
import React, {useState} from 'react';
import {Alert, Button, Switch, Text, TextInput, View} from 'react-native';

export default function UpdateDetails(props: any) {
  const para = props.route.params;
  const [task, setTask] = useState<string>(para.task);

  const [isCompleted, setIsCompleted] = useState<boolean>(para.isCompleted);
  const toggleSwitch = () => setIsCompleted(previousState => !previousState);

  const url = 'https://649bc4d6048075719236e50a.mockapi.io/task/Task/';
  const OnSubmitHandle = () => {
    axios
      .put(url + para.id, {task, isCompleted})
      .then(res => Alert.alert('Record Updated with Id :' + res.data.id))
      .catch(error => console.error(error));
  };

  return (
    <View style={{margin: 10}}>
      <View style={{flexDirection: 'row', margin: 10}}>
        <Text>Enter Task Name :</Text>
        <TextInput
          style={{borderWidth: 1, flex: 0.9}}
          placeholder="enter task"
          value={task}
          onChangeText={setTask}
        />
      </View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <Text>Is this task completed? : </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isCompleted ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isCompleted}
        />
      </View>

      <Button
        title="Submit"
        onPress={() => {
          OnSubmitHandle();
        }}
      />
    </View>
  );
}
