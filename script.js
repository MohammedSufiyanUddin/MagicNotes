showNotes();
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById("addTxt");
    let addTitle=document.getElementById("addTitle");
    let notes=localStorage.getItem("notes");
    if(notes === null){
        notesObj =[];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let myobj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value="";
    //console.log(notesObj);
    showNotes();
})
function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes === null){
        notesObj =[];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let html="";
    notesObj.forEach(function (element,index) {
        html +=`<div class="col-md-3">
        <div class="card noteCard mt-3">
        <div class="card-body">
            <h5 class="card-title"> ${element.title}</h5>
            <p class-card-text"> ${element.text} </p>
            <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary" id="">Delete Note</button>
        </div>
    </div></div>`;
    });
    let notesElm = document.getElementById("notes");
    if(notesObj.length != 0) {
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML='Nothing to show use "add a note" section above to add notes';
    }
}

//function for delet a note
function deleteNote(index){
    console.log('i am deleting');

    let notes=localStorage.getItem("notes");
    if(notes === null){
        notesObj =[];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search=document.getElementById('searchTxt');
search.addEventListener('input', function(){

    let inputval=search.value;
    console.log('input event fired', inputval);
    let noteCard=document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerHTML;
        //console.log(cardTxt);
        if(cardTxt.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }

    })
})

//id="searchTxt"