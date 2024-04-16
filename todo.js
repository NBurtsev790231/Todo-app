const form = document.querySelector('#form');
const taskText = document.querySelector('#task-text-area');
const taskList = document.querySelector('#task-list')
const emptylistText = document.querySelector('.empty_list__text')

let tasks = [];

form.addEventListener('submit', addTaskList);


function addTaskList(event) {
		//Отмена отправки формы по умолчанию
		event.preventDefault();

		//Вывод текста из поля для ввода
	const taskAreaText = taskText.value

	const newTask = {
		id: Date.now(), //Формируем идентификатор используя текущее время
		text: taskAreaText,
		done: false,
	};

	//Добавляем задачу в массив с задачами
	tasks.push(newTask);


	const cssClassDone = newTask.done ? 'task-title task_title__done' : 'task-title';
	
	//Добавление новой задачи на страницу
	const tasklistAdd = `<li id="${newTask.id}" class="task_list__item">
	<span class="${cssClassDone}">${newTask.text}</span>
	<div class="task_list__button">
		<button type="button" data-action="done" class="button_action">
			<img src="Img/icon-done-green.png" alt="icon-done-green" width="30" height=30">
		</button>
		<button type="button" data-action="delete" class="button_action">
			<img src="Img/icon-delete-red.png" alt="icon-delete-red" width="30" height="30">
		</button>
	</div>
	</li>`
	
	taskList.insertAdjacentHTML('beforeend', tasklistAdd);
	
	//Очищаем поле ввода после отправки и возвращаем фокус на него
	taskText.value = '';
	taskText.focus();
	
	//Проверяем есть ли задачи в списке, если да то скрываем блок
	if (taskList.children.length > 1) {
		emptylistText.classList.add('none_style');
	}
}

//Удаляем задачи из списка
taskList.addEventListener('click', deleteTask)


function deleteTask(event) {
	if (event.target.dataset.action !== 'delete') return;

//Проверяем был ли клик по кнопке удалить
	const parentElementDelete = event.target.closest('.task_list__item');
 
const idTaskDelete = Number(parentElementDelete.id);

//Находим индекс аздачи в массиве
const indexTask = tasks.findIndex(function (task) {
	return task.id == idTaskDelete;
});

//Удаляем задачу с найденным индексом
tasks.splice (indexTask, 1);

//Удаляем задачу из разметки
		parentElementDelete.remove();

//Проверяем есть ли задачи в списке, если нет выводим текст блока
	if (taskList.children.length === 1) {
		emptylistText.classList.remove('none_style');
	}
};



//Отмечаем задачу завершенной
taskList.addEventListener('click', doneTask)

function doneTask(event) {

//Проверяем если клик был не по кнопке завершения задачи
if (event.target.dataset.action !== 'done') return;

//Проверяем был ли клик по кнопке завершено
	if (event.target.dataset.action === 'done') {
		const parentElementDone = event.target.closest('.task_list__item');
//Находим тег с текстом задачи и применяем к нему стиль для заверешнных задач

	const idTaskDone = Number(parentElementDone.id);

//Находим задачи в масиве и меняем их поле done
	const task = tasks.find((task) => task.id === idTaskDone);
	task.done = !task.done

	console.log(task);


		const taskTitle = parentElementDone.querySelector('span');
		taskTitle.classList.toggle('task_title__done');
	}
};

