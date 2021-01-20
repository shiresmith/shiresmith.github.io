document.createElement("article");
document.createElement("footer");
document.createElement("header");
document.createElement("hgroup");
document.createElement("nav");
document.createElement("section");
document.createElement("aside");

		function toggleId(id){
			var e = document.getElementById(id);
			if (e.style.display=='block')
				e.style.display = 'none';
			else 
				e.style.display = 'block';
		}