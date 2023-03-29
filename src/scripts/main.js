const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const task = document.getElementById('input');
    const error = document.getElementById('error')

    if (input.value == '') {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';

        document.querySelector('.tasks').innerHTML += `
        <div class="tasks__task">
            <span id="taskname">${task.value}</span>
            <img class="tasks__delete" src="./dist/images/close.png" title="Delete task">
        </div>
        `

        var currentTasks = document.querySelectorAll('.tasks__delete');
        for (var i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll('.tasks__task');
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('completed');
            }
        }
    }

    input.value = ''
})