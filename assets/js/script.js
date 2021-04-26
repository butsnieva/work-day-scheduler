$('#currentDay').text('Today is ' + moment().format('dddd, MMMM Do'))

var tasks = {}
var currentTime = parseInt(moment().format('h'))

var workHour = [8,9,10,11,12,13,14,15,16]
for (i=0; i<workHour.length; i++) {
    var timeRow = $('<div>').addClass('row time-block').attr('data-id', workHour[i])
    $('.container').append(timeRow)

    var workingHour = $('<div>').addClass('hour col-1')
        var time = moment(workHour[i], 'h').format('h A')
            workingHour.text(time)
    var textArea = $('<textarea>').addClass('description col-9')
    var saveBtn = $('<button>').addClass('saveBtn col-1')
    timeRow.append(workingHour, textArea, saveBtn)
    
        if (currentTime > workHour[i]) {
            textArea.addClass('past')
        } else if (currentTime === workHour[i]) {
            textArea.addClass('present')
        } else if (currentTime < workHour[i]) {
            textArea.addClass('future')
        }

}

tasks = []
$('.saveBtn').on('click', function() {

    var value = $(this).siblings('.description').val()
    var time = $(this).parent('.row').data('id')
    var task = {time: time, value: value}
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    //console.log(tasks)
})


function loadTasks(){
    tasks = JSON.parse(localStorage.getItem("tasks"))
    for (var i = 0; i < tasks.length; i++){
        var taskTime = tasks[i].time;
        var taskValue = tasks[i].value; 
    $("[data-id=" + taskTime + "]").children("textarea").val(taskValue);
    }
}
loadTasks()

