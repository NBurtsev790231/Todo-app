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
	
	//скрываем блок пустого списка
	if (taskList.children.length > 1) {
		emptylistText.classList.add('none_style');
	}
}

//Удаление задачи из списка
taskList.addEventListener('click', deleteTask)





function deleteTask(event) {
	//console.log(event.target);

	if (event.target.dataset.action === 'delete'){
		//console.log('delete task');
		const parentElement = event.target.closest(`.task_list__item`);
		parentElement.remove();
	}

	if (taskList.children.length === 1) {
		emptylistText.classList.remove('none_style');
	}
};