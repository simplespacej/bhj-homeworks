document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown'); // Получаем все выпадающие списки

    dropdowns.forEach(function(dropdown) {
        const dropdownValue = dropdown.querySelector('.dropdown__value'); // Элемент, отображающий текущее значение
        const dropdownList = dropdown.querySelector('.dropdown__list'); // Список с элементами
        const dropdownItems = dropdown.querySelectorAll('.dropdown__item'); // Все элементы списка

        // Обработчик для открытия/закрытия выпадающего списка
        dropdownValue.addEventListener('click', function() {
            dropdownList.classList.toggle('dropdown__list_active'); // Переключаем класс для отображения списка
        });

        // Обработчик для каждого элемента списка
        dropdownItems.forEach(function(dropdownItem) {
            dropdownItem.addEventListener('click', function(event) {
                event.preventDefault(); // Предотвращаем переход по ссылке
                dropdownValue.textContent = dropdownItem.textContent; // Обновляем текущее значение
                dropdownList.classList.remove('dropdown__list_active'); // Закрываем меню после выбора
            });
        });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', function(event) {
        dropdowns.forEach(function(dropdown) {
            const dropdownValue = dropdown.querySelector('.dropdown__value');
            const dropdownList = dropdown.querySelector('.dropdown__list');

            if (!dropdownValue.contains(event.target) && !dropdownList.contains(event.target)) {
                dropdownList.classList.remove('dropdown__list_active'); // Убираем класс, если клик вне меню
            }
        });
    });
});
