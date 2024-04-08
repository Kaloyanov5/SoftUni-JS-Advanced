// tried multiple different approaches to solve the problem but I just counld't get 100/100 (code is 50/100)
function fromJSONToHTMLTable(input){
    const array = JSON.parse(input);
    let html = "<table>\n"

    let headers = `<tr>`;
    for (const key of Object.keys(array[0])){
        headers += `<th>${key.trim()}</th>`;
    }
    html += `\t${headers}</tr>`;

    for (const par in array){
        let curTr = "<tr>";
        for (const curTd of Object.values(array[par])){
            curTr += `<td>${curTd}</td>`;
        }
        html += `\n\t${curTr}</tr>`;
    }

    return `${html}\n</table>`;
}