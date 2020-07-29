/*const tags = document.getElementById('feed');
tags.addEventListener("click",function(e){
	const atag = e.target;
	atag.parentNode.remove();
});

document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
    }
});
*/
document.getElementById('feed').addEventListener("click",function(e){
	if (e.target.parentNode.textContent.substring(0,1) == "#") {
		e.target.parentNode.remove();
	}
	if (e.target.tagName == "EM")
	{
		const atag = document.getElementById('count');
		atag.textContent = parseInt(atag.textContent) + 1;
		var ele = document.createElement('li');
		var text = e.target.textContent.substring(0,e.target.textContent.length-2);
		var newText = document.createTextNode(text);
		ele.appendChild(newText);

		var a = document.createElement('A');
    	a.href = "#";
    	var atext = document.createTextNode('   ✖');
    	a.appendChild(atext);

    	ele.appendChild(a);

		document.getElementById('hashtag-list-inside-div').appendChild(ele);
		e.target.remove();
	}
});


document.querySelector('#hashtag-list-inside-div').addEventListener("click",function(e){
	if(e.target.textContent.trim() == "✖")
	{
		e.target.parentNode.remove();
		const atag = document.getElementById('count');
		atag.textContent = parseInt(atag.textContent) - 1;
	}
});


document.getElementById('clipboard').addEventListener("click",
	function(e){
			const store = document.getElementById('store');
			if(store.style.display == "none")
			{
				store.style.display = "inline-block";
			}
			else
			{
				store.style.display = "none";
			}
	});

document.querySelector('#store-head > a').addEventListener("click",function(e){
		document.getElementById('store').style.display = "none";
});

document.querySelector('#feed').addEventListener("click",function(e){
		document.getElementById('store').style.display = "none";
});


document.querySelector('#copy-to-clipboard').addEventListener("click",function(e){
	var tags = "";
	var li = document.getElementsByTagName('li');
	if(typeof(li) != 'undefined' || li != null)
	{
		for (var i = 0; i < li.length; i++) {
			tags = tags +" "+ li[i].textContent;
		};
		const el = document.createElement('textarea');
 		 el.value = tags;
  		document.body.appendChild(el);
 		 el.select();
 		 document.execCommand('copy');
 		document.body.removeChild(el);
	}
});


document.querySelector('input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    	var text = "#" + document.querySelector('input').value;
    	var em = document.createElement('EM');
    	var emtext = document.createTextNode(text);
    	em.appendChild(emtext); 

    	var a = document.createElement('A');
    	a.href = "#";
    	var atext = document.createTextNode(' ✖');
    	a.appendChild(atext);

    	em.appendChild(a);
    	document.querySelector('#feed').appendChild(em);
    }
});



document.querySelector('#selectAll').addEventListener("click",function(e){
		var lis = document.querySelectorAll('#feed > em');
		for(var i = 0;i<lis.length;i++)
		{
		var em = document.createElement('LI');
		var text2 = lis[i].textContent + "";
		var text = lis[i].textContent.substring(0,text2.length-2);
    	var emtext = document.createTextNode(text);
    	em.appendChild(emtext); 

    	var a = document.createElement('A');
    	a.href = "#";
    	var atext = document.createTextNode(' ✖');
    	a.appendChild(atext);

    	em.appendChild(a);
    	document.querySelector('#hashtag-list-inside-div').appendChild(em);
    	const atag = document.getElementById('count');
		atag.textContent = parseInt(atag.textContent) + 1;
		lis[i].remove();
		};
});