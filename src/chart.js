import d3 from 'd3';
import Koto from 'koto';
import configs from './configs';

class BarChart extends Koto {
  constructor(selection) {
    super(selection);

    // Setup
    var chart = this;

    // define configs
    this.configs = configs;

    // Scales
    chart.x = d3.scale.linear()
      .range([0, this.config('width')]);

    chart.y = d3.scale.linear()
      .domain([0, 100])
      .rangeRound([0, this.config('height')]);

    // add a layer
    chart.layer('bars', this.base.append('g'), {
      // destructuring ftw
      dataBind(data) {
        return this.selectAll('rect')
          .data(data, d => d.time);
      },
      insert() {
        return this.append('rect');
      }
    })
    // lifecycle events
    .on('enter', function() {
      var length = this.data().length;
      this.attr('x', (d, i) => chart.x(i + 1) - 0.5 )
        .attr('y', (d) => chart.config('height') - chart.y(d.value) - 0.5)
        .attr('width', chart.config('width') / length)
        .style('fill', 'steelBlue')
        .attr('height', d => chart.y(d.value));
    })
    .on('enter:transition', function() {
      this.duration(1000)
        .attr('x', (d, i) => chart.x(i) - 0.5);
    })
    .on('update:transition', function() {
      this.duration(1000)
        .attr('x', (d, i) => chart.x(i) - 0.5);
    })
    .on('exit:transition', function() {
      this.duration(1000)
        .attr('x', (d, i) => chart.x(i - 1) - 0.5)
        .remove();
    });

    // add another layer
    chart.layer('labels', this.base.append('g'), {
      dataBind(data) {
        return this.selectAll('text')
          .data(data, d => d.time);
      },
      insert() {
        return this.append('text');
      }
    })
    .on('enter', function() {
      this.attr('x', (d, i) => chart.x(i + 1) - 0.5)
        .attr('y', d => chart.config('height') - chart.y(d.value) - 15)
        .style('fill', 'steelBlue')
        .text(d => d.value);
    })
    .on('enter:transition', function() {
      this.duration(1000)
        .attr('x', (d, i) => chart.x(i) - 0.5);
    })
    .on('update:transition', function() {
      this.duration(1000)
        .attr('x', (d, i) => chart.x(i) - 0.5);
    })
    .on('exit:transition', function() {
      this.duration(1000)
        .attr('x', (d, i) => chart.x(i - 1) - 0.5)
        .remove();
    });
  }

  //override methods
  preDraw(data) {
    this.x.domain([0, data.length]);
  }
}

if (ON_TEST) {
  require('./chart.spec.js')(BarChart);
}

export default BarChart;