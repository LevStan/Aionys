# Aionys
Test Aionys Project
--------------------------------------------------------------------------------------------------
Для запуска REST сервиса необходимо:
1) Клонировать проект с репозитори¤.
2) Открыть Test_Aionys_RESTful.sln с помощью Visual Studio 2017(19) или использовать
.NET Core CLI, запуска¤ командой [dotnet build] [PROJECT|SOLUTION].
3) Для Visual Studio 2017(19) [Build Solution]-> Ctrl+F5.
4) IIS Express , порт дл¤ обмена: 44354
--------------------------------------------------------------------------------------------------
Как запустить клиентскую часть с использованием Angular CLI:
1) Клонировать проект с репозитория, папка (testaionysapp).
2) Скопировать проект в папку с [node_modules] или  выполнить npm install в папку проекта через cmd.
3) Используя командную строку перейти в расположение проекта и выполнить его (например: 
root>>D:]
D:>>cd D:/Program Files/testaionysapp
D:/Program Files/testaionysapp>> ng serve --open (build and run project by angular cli)
D:/Program Files/testaionysapp>> ng e2e (run angular e2e tests)
Порт: 44354
--------------------------------------------------------------------------------------------------
External packages:
1) Protractor (npm install -g protractor),
2) Updated Selenium standalone server (webdriver-manager update,webdriver-manager start),
3) @Ngrx (ng add @ngrx/store),
4) Ngx-translate (npm install @ngx-translate/core @ngx-translate/http-loader rxjs).
--------------------------------------------------------------------------------------------------

