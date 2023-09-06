# :small_orange_diamond: Приложение "Search for Books"
*Тестовое задание*  
______

[![Скриншот страницы](https://i.ibb.co/fNLBtc0/2023-09-06-08-05-38.jpg)](https://uzornakovre.github.io/google-books/)

C помощью данного приложения можно осуществлять поиск книг по ключевому слову. Присутствует возможность фильтровать результат поиска по нескольким критериям. Данные запрашиваются у **Google Books API**. Для использования значений элементов формы поиска используется кастомный хук **useFormData**. 

Результат поиска отображается на странице в виде карточек, при нажатии на какую-либо из них открывается **модальное окно** с расширенным описанием книги. Изначально отображаются только 30 карточек, а при каждом нажатии на кнопку "Load more" будут загружаться еще по 30, дополняя список.

Хранение состояний реализуется с помошью библиотеки **Redux Toolkit**.

Верстка **адаптивно-отзывчивая**, прекрасно смотрится на всех разрешениях начиная от 320pх. Присутствуют элементы **flexbox** и **grid layout**. 

Используемые технологии: 
* :heavy_check_mark: HTML5    
* :heavy_check_mark: CSS3 (**Препроцессор SCSS**)      
* :heavy_check_mark: TypeScript
* :heavy_check_mark: React.js
* :heavy_check_mark: Redux Toolkit
 
[:link: Открыть веб-сайт приложения](https://uzornakovre.github.io/google-books/)  
------
![GitHub repo size](https://img.shields.io/github/repo-size/uzornakovre/google-books?color=yellow&style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/uzornakovre/google-books?color=blue&style=flat-square) ![GitHub Repo stars](https://img.shields.io/github/stars/uzornakovre/google-books?color=pink&style=flat-square)  