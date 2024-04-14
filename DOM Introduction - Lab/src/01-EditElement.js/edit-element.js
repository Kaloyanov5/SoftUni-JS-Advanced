function editElement(element, match, replacer){
    const text = element.textContent;

    const regEx = new RegExp(match, "g");
    const result = text.replace(regEx, replacer);
    element.textContent = result;
}