d3.select("#new-note")
    .on('submit', function() {
      d3.event.preventDefault();
      var input = d3.select('input');
      d3.select("#notes")
        .append('p')
          .classed('note', true)
          .text(input.property('value'));
      input.property('value', '');
    });

d3.select("#remove-notes-btn")
  .on('click', () => {
    d3.event.preventDefault();
    d3.selectAll("#notes")
      .remove();
  })