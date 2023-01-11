const movies = [{
        checkbox: false,
        name: "First Blood",
        year: "1982",
        country: "USA",
        note: "Okrutni šerif i njegovi zamjenici prisiljavaju veterana Zelene beretke da pobjegne u planine i povede jedan eskalirajući rat protiv njegovih progonitelja.",
        actors: ["Sylvester Stallone", "Richard Crenna"]

    },
    
    {
        checkbox: false,
        name: "10 Things I Hate About You",
        year: "1999",
        country: "USA",
        note: "Lijepa, popularna tinejdžerka ne može da izađe na sastanak dok to ne uradi njena zlovoljna starija sestra.",
        actors: ["Julia Stiles", "Heath Ledger"]

    },
    
    {
        checkbox: false,
        name: "Interstellar",
        year: "2014",
        country: "USA",
        note: "Tim istraživača putuje kroz crnu rupu u svemiru u pokušaju da osigura opstanak čovječanstva.",
        actors: ["McConaughey", "Anne Hathaway"]

    }];

    let addMovieForm = document.getElementById("addMovieForm");
    var modal = document.getElementById('exampleModal');
    modal.addEventListener('hidden.bs.modal', function (event) {
      addMovieForm.reset();
    });
    
    displayMovies();

    function getMovieInput(){
      let checkbox = document.getElementById("checkbox-input").checked;
      let name = document.getElementById("input-name").value;
      let year = document.getElementById("input-year").value;
      let country = document.getElementById("input-country").value;
      let note = document.getElementById("input-note").value;
      let actors = document.getElementById("input-actors").value;
      let yearInput = parseInt(document.getElementById("yearInput").value);

      if(!actors.includes(" ")){
        document.getElementById("input-actors").setCustomValidity("Morate uniti makar jednog glumca, i to u ispravnom formatu!!!");
        return;

      } 

      let newMovie = {};
      newMovie.checkbox = checkbox;
      newMovie.name = name;
      newMovie.year = year;
      newMovie.country = country;
      newMovie.note = note;

      newMovie.actors = actors.split(", ");
      newMovie.yearInput = yearInput;

      movies.push(newMovie);
      displayMovies();
      closeModal();
    
      addMovieForm.reset();

    }
    
    function closeModal(){
      var el = document.getElementById('exampleModal');

      const modal = bootstrap.Modal.getInstance(el);
      modal.hide();
      el.addEventListener('hidden.bs.modal', () => {
        modal.dispose();
      }, { once:true });
    }
    
    function displayMovies() {
      let table = document.getElementById("movieTable");
      let tableBody = document.getElementById("tableBody");
      tableBody.innerHTML = "";
    
      for (let movie of movies) {
        let row = document.createElement("tr");
        row.style.backgroundColor = movie.checkbox ? "#D1E7DD" : "#F8D7DA";
        
        let checkboxCell = document.createElement("td");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = movie.checkbox;
        checkbox.addEventListener("change", function() {
          movie.checkbox = this.checked;
          row.style.backgroundColor = this.checked ? "#D1E7DD" : "#F8D7DA";
        });

        checkboxCell.appendChild(checkbox);
        row.appendChild(checkboxCell);


        let nameCell = document.createElement("td");
        nameCell.textContent = movie.name;
        row.appendChild(nameCell);

        let yearCell = document.createElement("td");
        yearCell.textContent = movie.year;
        row.appendChild(yearCell);

        let countryCell = document.createElement("td");
        countryCell.textContent = movie.country;
        row.appendChild(countryCell);

        let noteCell = document.createElement("td");
        noteCell.textContent = movie.note;
        row.appendChild(noteCell);

        let actorsCell = document.createElement("td");
        console.log(movie.actors);
        actorsCell.textContent = movie.actors.join(", ");
        row.appendChild(actorsCell);
        tableBody.appendChild(row);
      }
    }
  
    addMovieForm.addEventListener("submit", function(event) {
      event.preventDefault();
      getMovieInput();
    });

    
    