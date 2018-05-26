//collect info
let bookArray = ['he_Hunger_Games', 
    'To_Kill_a_Mockingbird', 
    'Pride_and_Prejudice',
    'Twilight',
    'The_Book_Thief',
    'Animal_Farm',
    'Gone_with_the_Wind',
    'The_Fault_in_Our_Stars',
    'The_Giving_Tree',
    'Wuthering_Heights'];

let titleArray = ['he Hunger Games', 
'To Kill a Mockingbird', 
'Pride and Prejudice',
'Twilight',
'The Book Thief',
'Animal Farm',
'Gone with the Wind',
'The Fault in Our Stars',
'The Giving Tree',
'Wuthering Heights'];

let authorArray = ['Suzanne Collins',
'Harper Lee',
'Jane Austen',
'Stephenie Meyer',
'Markus Zusak',
'George Orwell',
'Margaret Mitchell',
'John Green',
'Shel Silverstein',
'Emily Bronte'];

//Creat ul and li
let myul = document.createElement('ul');
myul.id = 'ulid';
document.body.appendChild(myul);

let myli;
for (let i = 0; i < bookArray.length; i++) {
    creatLi_(myul, i);
}

function creatLi_(myul, i) {
    myli = document.createElement('li');
    myli.id = 'liid' + [i];
    myul.appendChild(myli);
    myli.style.padding = '20px';
    myli.style.textAlign = 'center';
    myli.style.border = '2px solid gray';
    myli.style.fontFamily = 'fantasy';
    myli.style.fontSize = '20px';
    myli.style.margin = '1px';
}

//Build object
let books = [];
let content = [];
for (let i = 0; i < bookArray.length; i++) {
    books[i] = new Object();
    books[i].id = bookArray[i];
    books[i].title = titleArray[i];
    books[i].language = 'English';
    books[i].author = authorArray[i];
    books[i].imgpath = '\img\\' + [i+1] + '.jpg'; 
    content[i] = (
    " Title" + ": " + books[i].title + ";" + '<br>' +
    " Language" + ": " + books[i].language + ";" + '<br>' +
    " Author" + ": " + books[i].author);
} 

for (let i = 0; i < bookArray.length; i++) {
    document.getElementById('liid' + [i]).innerHTML = '<img src="'+books[i].imgpath+'" />' + '\n' + '<p>' + content[i] + '</p>';
}

//modify ul css
myul.style.listStyle = 'none';
myul.style.color = 'gray';
myul.style.border = '2px solid gray';
myul.style.padding = '0';
myul.style.width = '300px';
myul.style.margin = 'auto';