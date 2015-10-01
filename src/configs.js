var configs = {
  height: {
    name: 'height',
    description: 'The height of the chart.',
    value: 500,
    type: 'number',
    units: 'px',
    category: 'Size',
    getter: function (){
      // get value
      return this.value;
    },
    setter: function (newValue){
      // Set value
      return newValue;
    }
  },
  width: {
    name: 'width',
    description: 'The widthj of the chart.',
    value: 800,
    units: 'px',
    type: 'number',
    category: 'Size'
  }
};

// idea
// var configs = {
//   height: new NumberConfig(),
//   width: new NumberConfig()
// }

export default configs;