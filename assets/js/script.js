$('#currentDay').text('Today is ' + moment().format('dddd, MMMM Do'))

var startHour = 1
var currentTime = parseInt(moment().format('h'))
console.log(startHour)


for (i=0; i<23; i++) {
    var timeRow = $('<div>').addClass('row time-block')
    $('.container').append(timeRow)

    var workingHour = $('<div>').addClass('hour col-1')
        var time = moment(startHour, 'h').format('h A')
            workingHour.text(time)
    var textArea = $('<textarea>').addClass('description col-9')
    var saveBtn = $('<button>').addClass('saveBtn col-1')
    timeRow.append(workingHour, textArea, saveBtn)
    
        if (currentTime > startHour) {
            $(textArea).addClass('past')
        } else if (currentTime === startHour) {
            $(textArea).addClass('present')
        } else if (currentTime < startHour) {
            $(textArea).addClass('future')
        }

    startHour++
}
