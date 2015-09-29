var configs = [{
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
}, {
  name: 'width',
  description: 'The widthj of the chart.',
  value: 800,
  units: 'px',
  type: 'number',
  category: 'Size'
}];

export default configs;