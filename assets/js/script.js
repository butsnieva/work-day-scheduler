$('#currentDay').text('Today is ' + moment().format('dddd, MMMM Do'))

var startHour = 8


for (i=0; i<9; i++) {
    var timeRow = $('<div>').addClass('row time-block')
    var workingHour = $('<div>').addClass('hour col-1')
    var time = moment(startHour, 'h').format('h A')
        workingHour.text(time)
    var textArea = $('<textarea>').addClass('col-9')
    var saveBtn = $('<button>').addClass('saveBtn col-1')
    $('.container').append(timeRow)
    timeRow.append(workingHour, textArea, saveBtn)
    startHour++
}
