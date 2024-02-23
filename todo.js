const form = document.querySelector('#form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list')

console.log(form);
console.log(taskInput);
console.log(taskList);

form.addEventListener('submit', function(event) {
	//Отмена отправки формы по умолчанию
	event.preventDefault();

	//Вывод текста из поля для ввода
const taskInputText = taskInput.value

//Добавление новой задачи на страницу
const tasklistAdd = `<li id="task-list-item" class="task_list__item">
<span class="task-title">${taskInputText}</span>
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
console.log(tasklistAdd);
});