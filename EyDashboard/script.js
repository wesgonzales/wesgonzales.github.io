/*
  Visualization One
*/
d3.select('.containerOne .item:nth-child(3)')
  .style({
    'background': '#268BD2',
    'padding': '10px',
    'margin' : '5px',
    'color' : '#EEE8D5'
  });

/*
 Visualization Two
*/
var myStyles = [
  { width: 200,
    color: '#A57706'},
  { width: 230,
    color: '#BD3613'},
  { width: 220,
    color: '#D11C24'},
  { width: 290,
    color: '#C61C6F'},
  { width: 236,
    color: '#595AB7'},
  { width: 230,
    color: '#2176C7'}
];

d3.selectAll('.containerTwo .item')
    .data(myStyles)
    .style({
      'color': 'white',
      'background' : function(d) {
        return d.color;
      },
      width : function(d) {
        return d.width + 'px';
      }
    });

/*
    Visualization Three
 */
var bardata = [20, 30, 105, 15, 85];

var height = 100,
    width = 340,
    barWidth = 50,
    barOffset = 5;

d3.select('.containerThree #chart').append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background', '#24282D')
    .selectAll('rect').data(bardata)
    .enter().append('rect')
    .style('fill', '#C61C6F')
    .attr('width', barWidth)
    .attr('height', function(d) {
      return d;
    })
    .attr('x', function(d,i) {
      return i * (barWidth + barOffset);
    })
    .attr('y', function(d) {
      return height - d;
    });

/*
    Visualization Four
 */
var bardata = [];

for (var i=0; i < 50; i++) {
  bardata.push(Math.random())
}

var height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5;

var tempColor;

var colors = d3.scale.linear()
    .domain([0, bardata.length*.33, bardata.length*.66, bardata.length])
    .range(['#B58929','#C61C6F', '#268BD2', '#85992C']);

var yScale = d3.scale.linear()
    .domain([0, d3.max(bardata)])
    .range([0, height]);

var xScale = d3.scale.ordinal()
    .domain(d3.range(0, bardata.length))
    .rangeBands([0, width]);

var myChart = d3.select('.containerFour #chartFour').append('svg')
    .attr('width', width)
    .attr('height', height)
    .selectAll('rect').data(bardata)
    .enter().append('rect')
    .style('fill', function(d,i) {
      return colors(i);
    })
    .attr('width', xScale.rangeBand())
    .attr('x', function(d,i) {
      return xScale(i);
    })
    .attr('height', 0)
    .attr('y', height)

    .on('mouseover', function(d) {
      tempColor = this.style.fill;
      d3.select(this)
          .style('opacity', .5)
          .style('fill', 'yellow')
    })

    .on('mouseout', function(d) {
      d3.select(this)
          .style('opacity', 1)
          .style('fill', tempColor)
    });

myChart.transition()
    .attr('height', function(d) {
      return yScale(d);
    })
    .attr('y', function(d) {
      return height - yScale(d);
    })
    .delay(function(d, i) {
      return i * 20;
    })
    .duration(1000)
    .ease('elastic');

/*
    Visualization Five
 */
var bardata2 = [];

for (var i=0; i < 30; i++) {
  bardata2.push(Math.round(Math.random()*30)+20)
}

var height2 = 400,
    width2 = 600,
    barWidth2 = 50,
    barOffset2 = 5;

var tempColor2;

var colors2 = d3.scale.linear()
    .domain([0, bardata2.length*.33, bardata2.length*.66, bardata2.length])
    .range(['#B58929','#C61C6F', '#268BD2', '#85992C']);

var yScale2 = d3.scale.linear()
    .domain([0, d3.max(bardata2)])
    .range([0, height2]);

var xScale2 = d3.scale.ordinal()
    .domain(d3.range(0, bardata2.length))
    .rangeBands([0, width2]);

var tooltip2 = d3.select('body').append('div')
    .style('position', 'absolute')
    .style('padding', '0 10px')
    .style('background', 'white')
    .style('opacity', 0);

var myChart2 = d3.select('.containerFive #chartFive').append('svg')
    .attr('width', width2)
    .attr('height', height2)
    .selectAll('rect').data(bardata2)
    .enter().append('rect')
    .style('fill', function(d,i) {
      return colors2(i);
    })
    .attr('width', xScale2.rangeBand())
    .attr('x', function(d,i) {
      return xScale2(i);
    })
    .attr('height', 0)
    .attr('y', height2)

    .on('mouseover', function(d) {

      tooltip2.transition()
          .style('opacity', .9)

      tooltip2.html(d)
          .style('left', (d3.event.pageX - 35) + 'px')
          .style('top',  (d3.event.pageY - 30) + 'px')


      tempColor2 = this.style.fill;
      d3.select(this)
          .style('opacity', .5)
          .style('fill', 'yellow')
    })

    .on('mouseout', function(d) {
      d3.select(this)
          .style('opacity', 1)
          .style('fill', tempColor2)
    });

myChart2.transition()
    .attr('height', function(d) {
      return yScale2(d);
    })
    .attr('y', function(d) {
      return height2 - yScale2(d);
    })
    .delay(function(d, i) {
      return i * 20;
    })
    .duration(1000)
    .ease('elastic');

/*
    Visualization Six
 */
var bardata3 = [];

for (var i=0; i < 50; i++) {
  bardata3.push(Math.round(Math.random()*100)+10)
}

bardata3.sort(function compareNumbers(a,b) {
  return a -b;
});

var margin3 = { top: 30, right: 30, bottom: 40, left:50 }

var height3 = 400 - margin3.top - margin3.bottom,
    width3 = 900 - margin3.left - margin3.right,
    barWidth3 = 50,
    barOffset3 = 5;

var tempColor3;

var colors3 = d3.scale.linear()
    .domain([0, bardata3.length*.33, bardata3.length*.66, bardata3.length])
    .range(['#B58929','#C61C6F', '#268BD2', '#85992C'])

var yScale3 = d3.scale.linear()
    .domain([0, d3.max(bardata3)])
    .range([0, height3]);

var xScale3 = d3.scale.ordinal()
    .domain(d3.range(0, bardata3.length))
    .rangeBands([0, width3], 0.2)

var tooltip3 = d3.select('body').append('div')
    .style('position', 'absolute')
    .style('padding', '0 10px')
    .style('background', 'white')
    .style('opacity', 0)

var myChart3 = d3.select('.containerSix #chartSix').append('svg')
    .style('background', 'transparent')
    .attr('width', width3 + margin3.left + margin3.right)
    .attr('height', height3 + margin3.top + margin3.bottom)
    .append('g')
    .attr('transform', 'translate('+ margin3.left +', '+ margin3.top +')')
    .selectAll('rect').data(bardata3)
    .enter().append('rect')
    .style('fill', function(d,i) {
      return colors3(i);
    })
    .attr('width', xScale3.rangeBand())
    .attr('x', function(d,i) {
      return xScale3(i);
    })
    .attr('height', 0)
    .attr('y', height3)

    .on('mouseover', function(d) {

      tooltip3.transition()
          .style('opacity', .9)

      tooltip3.html(d)
          .style('left', (d3.event.pageX - 35) + 'px')
          .style('top',  (d3.event.pageY - 30) + 'px')


      tempColor3 = this.style.fill;
      d3.select(this)
          .style('opacity', .5)
          .style('fill', 'yellow')
    })

    .on('mouseout', function(d) {
      d3.select(this)
          .style('opacity', 1)
          .style('fill', tempColor3)
    })

    .on('mouseleave', function(d) {
        tooltip3.transition()
            .style('opacity', 0)
    });

myChart3.transition()
    .attr('height', function(d) {
      return yScale3(d);
    })
    .attr('y', function(d) {
      return height3 - yScale3(d);
    })
    .delay(function(d, i) {
      return i * 20;
    })
    .duration(1000)
    .ease('elastic')

var vGuideScale3 = d3.scale.linear()
    .domain([0, d3.max(bardata3)])
    .range([height3, 0])

var vAxis3 = d3.svg.axis()
    .scale(vGuideScale3)
    .orient('left')
    .ticks(10)

var vGuide3 = d3.select('.containerSix svg').append('g')
vAxis3(vGuide3)
vGuide3.attr('transform', 'translate(' + margin3.left + ', ' + margin3.top + ')')
vGuide3.selectAll('path')
    .style({ fill: 'none', stroke: "#BEC1C7"})
vGuide3.selectAll('line')
    .style({ stroke: "#BEC1C7"})
vGuide3.selectAll('text')
    .style({ stroke: "#BEC1C7"})

var hAxis3 = d3.svg.axis()
    .scale(xScale3)
    .orient('bottom')
    .tickValues(xScale3.domain().filter(function(d, i) {
      return !(i % (bardata3.length/5));
    }))

var hGuide3 = d3.select('.containerSix svg').append('g')
hAxis3(hGuide3)
hGuide3.attr('transform', 'translate(' + margin3.left + ', ' + (height3 + margin3.top) + ')')
hGuide3.selectAll('path')
    .style({ fill: 'none', stroke: "#BEC1C7"})
hGuide3.selectAll('line')
    .style({ stroke: "#BEC1C7"})
hGuide3.selectAll('text')
    .style({ stroke: "#BEC1C7"})

/*
 Visualization Seven
 */
var width = 400,
    height = 400,
    radius = 175
colors = d3.scale.ordinal()
    .range(['#595AB7','#A57706','#D11C24','#C61C6F','#BD3613','#2176C7','#259286','#738A05']);

var piedata = [
    {   label: "One",
        value: 10 },
    {   label: "Two",
        value: 23},
    {   label: "Three",
        value: 35},
    {   label: "Four",
        value: 41},
    {   label: "Five",
        value: 58},
    {   label: "Six",
        value: 62}
]

var pie = d3.layout.pie()
    .value(function(d) {
        return d.value;
    })

var arc = d3.svg.arc()
    .outerRadius(radius)

var myChart4 = d3.select('.containerSeven #chartSeven').append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate('+(width-radius)+','+(height-radius)+')')
    .selectAll('path').data(pie(piedata))
    .enter().append('g')
    .attr('class', 'slice')

var slices = d3.selectAll('g.slice')
    .append('path')
    .attr('fill', function(d, i) {
        return colors(i);
    })
    .attr('d', arc)

var text = d3.selectAll('g.slice')
    .append('text')
    .text(function(d, i) {
        return d.data.label;
    })
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .attr('transform', function(d) {
        d.innerRadius = 0;
        d.outerRadius = radius;
        return 'translate('+ arc.centroid(d)+')'
    });

/*
 Visualization Eight
 */
var   w = 400,
    h = 400;

var circleWidth = 5;

var palette = {
    "lightgray": "#819090",
    "gray": "#708284",
    "mediumgray": "#536870",
    "darkgray": "#475B62",

    "darkblue": "#0A2933",
    "darkerblue": "#042029",

    "paleryellow": "#FCF4DC",
    "paleyellow": "#EAE3CB",
    "yellow": "#A57706",
    "orange": "#BD3613",
    "red": "#D11C24",
    "pink": "#C61C6F",
    "purple": "#595AB7",
    "blue": "#2176C7",
    "green": "#259286",
    "yellowgreen": "#FFD200"
}

var nodes = [
    { name: "Root"},
    { name: "node0"},
    { name: "node1", target: [0]},
    { name: "node3", target: [0]},
    { name: "node4", target: [1]},
    { name: "node5", target: [0, 1, 2, 3]}
];

var links = [];

for (var i = 0; i< nodes.length; i++) {
    if (nodes[i].target !== undefined) {
        for (var x = 0; x< nodes[i].target.length; x++ ) {
            links.push({
                source: nodes[i],
                target: nodes[nodes[i].target[x]]
            })
        }
    }
}

var myChart5 = d3.select('.containerSeven #chartEight')
    .append('svg')
    .attr('width', w)
    .attr('height', h)

var force = d3.layout.force()
    .nodes(nodes)
    .links([])
    .gravity(0.3)
    .charge(-1000)
    .size([w, h])

var link = myChart5.selectAll('line')
    .data(links).enter().append('line')
    .attr('stroke', palette.gray)

var node = myChart5.selectAll('circle')
    .data(nodes).enter()
    .append('g')
    .call(force.drag);

node.append('circle')
    .attr('cx', function(d) { return d.x; })
    .attr('cy', function(d) { return d.y; })
    .attr('r', circleWidth )
    .attr('fill', function(d, i) {
        if (i>0) { return palette.pink }
        else { return palette.blue }
    })

node.append('text')
    .text(function(d) { return d.name})
    .attr('font-family', 'Roboto Slab')
    .attr('fill', function(d, i) {
        if (i>0) { return palette.mediumgray}
        else { return palette.yellowgreen}
    })
    .attr('x', function(d, i) {
        if (i>0) { return circleWidth + 4 }
        else { return circleWidth -15 }
    })
    .attr('y', function(d, i) {
        if (i>0) { return circleWidth }
        else { return 8 }
    })
    .attr('text-anchor', function(d, i) {
        if (i>0) { return 'beginning' }
        else { return 'end'}
    })
    .attr('font-size',  function(d, i) {
        if (i>0) { return '1em' }
        else { return '1.8em'}
    })

force.on('tick', function(e) {
    node.attr('transform', function(d, i) {
        return 'translate('+ d.x +', '+ d.y +')';
    })

    link
        .attr('x1', function(d) { return d.source.x })
        .attr('y1', function(d) { return d.source.y })
        .attr('x2', function(d) { return d.target.x })
        .attr('y2', function(d) { return d.target.y })
})


force.start();





