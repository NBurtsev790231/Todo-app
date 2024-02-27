const form = document.querySelector('#form');
const taskText = document.querySelector('#task-text-area');
const taskList = document.querySelector('#task-list')
const emptylistText = document.querySelector('.empty_list__text')


form.addEventListener('submit', addTaskList);


function addTaskList(event) {
		//Отмена отправки формы по умолчанию
		event.preventDefault();

		//Вывод текста из поля для ввода
	const taskAreaText = taskText.value
	
	//Добавление новой задачи на страницу
	const tasklistAdd = `<li id="task-list-item" class="task_list__item">
	<span class="task-title">${taskAreaText}</span>
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
	if (event.target.dataset.action === 'delete'){
		const parentElementDelete = event.target.closest('.task_list__item');
		parentElementDelete.remove();
	}
	//Проверяем есть ли задачи в списке, если нет выводим текст блока
	if (taskList.children.length === 1) {
		emptylistText.classList.remove('none_style');
	}
};


//Отмечаем задачу завершенной
taskList.addEventListener('click', doneTask)

function doneTask(event) {
	if (event.target.dataset.action === 'done') {
		const parentElementDone = event.target.closest('.task_list__item');
		//Находим тег с текстом задачи и применяем к нему стиль для заверешнных задач
		const taskTitle = parentElementDone.querySelector('span');
		taskTitle.classList.toggle('task_title__done');
	}
};