function getTemplate(templateName) {
	return require("./templates/"+templateName);
}
console.log(getTemplate("pageA"));
console.log(getTemplate("pageB"));
console.log(getTemplate("pageC"));
