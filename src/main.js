const div = dom.find('#test>.red')[0]
dom.style(div, 'color','red')

const divList = dom.find('.red')
dom.each(divList, (n) => console.log(n))

$('#test1').find('.child').addClass('blue')