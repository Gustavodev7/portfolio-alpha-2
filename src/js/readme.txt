document.querySelectorAll('a[href^="#"]') seleciona todos os links <a> quem tem href com #. Esses sao os links que levam a diferentes partes da pagina.

add.eventListener ('click', function (e) {...}); adiciona um evento quando um link e clicado

scrollIntoView({ behavior: 'smooth' }): Executa uma rolagem suave até o elemento da página que corresponde ao link clicado.
