import * as React from 'react';
import Select from 'react-select';
import { Button } from 'semantic-ui-react';

const divStyle = {
  padding: '10px'
};

const divPaddingTop = {
  paddingTop: '10px'
}

const dropDown = (props) => {

  	// get info from Cogngiy data
	const { message, onSendMessage } = props;
	const { data } = message;
	const { _plugin } = data;
	const {items}  = _plugin;

  const options = items.map(item => {
    return {
      label: item,
      value: item
    }
  })

  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (selectedOption) => {
    setSelectedValue(selectedOption);
  }

  // console.log(items)

  return (
    <div style={divStyle}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
      <Select options={options}
        onChange={handleChange}
      />
      <div style={divPaddingTop}>
        <Button
          onClick={() => onSendMessage("", {
            seletedValue: selectedValue.label
          })}
          content='submit'
          color='blue'
        />
      </div>
    </div>
  )
}

const dropDownPlugin = {
  match: 'dropdown',
  component: dropDown,
  options: {
    "fullwidth": true
  }
}

if (!window.cognigyWebchatMessagePlugins) {
  window.cognigyWebchatMessagePlugins = []
}

window.cognigyWebchatMessagePlugins.push(dropDownPlugin);