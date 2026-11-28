const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
    }
    input.focus();
});

function displayList(item) {
    // Create a new list item and add it to the list
    const li = document.createElement('li');
    li.textContent = item;
    // Create a delete button for the list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    // Add an event listener to the delete button to remove the list item when clicked
    deleteButton.addEventListener('click', () => {
        li.remove();
        deleteChapter(li.textContent)
        input.focus();
    });
    li.append(deleteButton);
    list.append(li);
};

function setChapterList() {
    localStorage.setItem('myBOMChapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myBOMChapters'));
}

function deleteChapter(chapter) {
    // The parameters in slice() are the characters you want to include from the
    // // 1. first index up until the 2. last index after the character you want to include, or (startIndex, endIndex).
    chapter = chapter.slice(0, chapter.length - 1); // There are no negative numbers in indexes, so writing '-1' in the endIndex automatically translates to 'chapter.length - 1'
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}