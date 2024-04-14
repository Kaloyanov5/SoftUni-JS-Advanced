function pieceOfPie(flavors, targetFlavor1, targetFlavor2){
    const difference = (flavors.indexOf(targetFlavor2) - flavors.indexOf(targetFlavor1)) + 1;
    return flavors.splice(flavors.indexOf(targetFlavor1), difference);
}

console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'))