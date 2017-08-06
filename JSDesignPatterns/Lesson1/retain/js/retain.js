$(function(){

    var model = {
        init: function() {
            //creates localStorage.notes array object, array is stored as string
            if (!localStorage.notes) {
                localStorage.notes = JSON.stringify([]);
            }
        },
        add: function(obj) {
            //adds obj to localStorage.notes array
            var data = JSON.parse(localStorage.notes);
            data.push(obj);
            localStorage.notes = JSON.stringify(data);
        },
        getAllNotes: function() {
            //function returns the localStorage.notes object
            return JSON.parse(localStorage.notes);
        }
    };

    //where the real smarts should be
    var octopus = {
        //takes new note, tells model to add it to localStorage.notes array
        addNewNote: function(noteStr) {
            const today = new Date();
            const dd = today.getDate();
            const mm = today.getMonth()+1; //January is 0
            const yyyy = today.getFullYear();
            model.add({
                content: noteStr,
                date: Date.now()
            });
            //calls view/updates view with new note
            view.render();
        },
           //gets array of objects from model
        getNotes: function() {
            //reverses object before giving it to view
            return model.getAllNotes().reverse();
        },
        //initializes model array object that stores data and initializes view
        init: function() {
            model.init();
            view.init();
        }
    };


    var view = {
        init: function() {
            //reference to <ul></ul>  DOM object
            this.noteList = $('#notes');
            //form that takes note input
            var newNoteForm = $('#new-note-form');
            //note input inserted
            var newNoteContent = $('#new-note-content');


            //upon submission to input form
            newNoteForm.submit(function(e){
                //add content of input to data object in model by calling the octopus
                octopus.addNewNote(newNoteContent.val());
                //clear the note input inserted
                newNoteContent.val('');
                // tells the user agent that if the event goes unhandled, its default action should not be taken as it normally would be.
                e.preventDefault();
            });
            view.render();
        },
        render: function(){
            var htmlStr = '';
            //loops through array of data and fetches the content and places it inside <li></li> tags
            octopus.getNotes().forEach(function(note){
                htmlStr += '<li class="note">'+
                        note.content + '<span class="note-date">' + new Date(note.date).toString() + '</span>'
                    '</li>';
            });
            //this.noteList which is a reference to <ul></ul> dom object has html of htmlStr built above inserted
            this.noteList.html( htmlStr );
        }
    };

    octopus.init();
});