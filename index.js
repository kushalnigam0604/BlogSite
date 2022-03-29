showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTextarea = document.getElementById("addTextarea");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTextarea.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTextarea.value = "";
  console.log(notesObj);
  showNotes();
});


// -- function to show elements from localstorage --

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html =
      html +
      `
        <div class="mx-2 my-2 card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
          </div>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
  });
  let notesElm = document.getElementById("notes");
  if(notesObj.length!= 0){
      notesElm.innerHTML = html;
  }
  else{
      notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}


//  --  funtion to delete a note  --

function deleteNote(index){
  let notes = localStorage.getItem("notes");
  if(notes==null){
    notesObj = [];
  }
  else{
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index,1);
  localStorage.setItem("notes",JSON.stringify(notesObj));
  showNotes();

}


let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
  
})