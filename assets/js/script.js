$('#currentDay').text('Today is ' + moment().format('dddd, MMMM Do'))

var startHour = 8

for (i=0; i<9; i++) {
    var timeRow = $('<div>').addClass('row')
    var workHours = moment(startHour, 'h').format('LT')
        timeRow.text(workHours)
    $('.container').append(timeRow) 
    startHour++
}
