var select = document.querySelector('#select'),
	input = document.querySelector('#text'),
	check = document.querySelector('#check')

function saveContext(){
	var element = document.createElement('a');
	var content = input.value + ' ' + select.selectedIndex + ' ' + check.checked;
	element.setAttribute('href', 'data:plain/text;charset=utf-8,' + encodeURIComponent(content));
	element.setAttribute('download', 'myContext.txt')
	element.click();
}

function changeElements(){
	var file = document.querySelector('#file').files[0];
	var reader = new FileReader();
	
	reader.readAsText(file);

	reader.onload = function(){
		var content = reader.result;
		var content = content.split(' ');
		input.value = content[0];
		select.selectedIndex = content[1];
		check.checked = content[2];
	}
}