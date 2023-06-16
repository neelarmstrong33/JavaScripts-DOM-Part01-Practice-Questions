//const listItemElement = document.querySelectorAll('li'); //this does not
const listItemElement = document.getElementsByTagName('li'); //this give you live list

for(const listItemEl of listItemElement )
{
    console.dir(listItemEl);
}