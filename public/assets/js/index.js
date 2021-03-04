// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  // UPDATE
  const changeSleepBtns = document.querySelectorAll(".change-sleep");

  // Set up the event listener for the create button
  if (changeSleepBtns) {
    changeSleepBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        console.log("SMASH!");
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute("data-id");
        const newState = e.target.getAttribute("data-state");
console.log(`newState: ${newState}`);
        const updateState = {
          devoured: newState,
        };
        console.log(JSON.stringify(updateState));

        fetch(`/api/burgers/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          // make sure to serialize the JSON body
          body: JSON.stringify(updateState),
        }).then((response) => {
          // Check that the response is all good
          if (response.ok) {
            console.log(`changed devoured to: ${newState}`);

            // Reload the page so the user can see the new quote
            location.reload("/");
          } else {
            alert("something went wrong!");
          }
        });
      });
    });
  }

  // CREATE
  const createCatBtn = document.getElementById("create-form");

  if (createCatBtn) {
    createCatBtn.addEventListener("submit", (e) => {
      e.preventDefault();

      // Grabs the value of the textarea that goes by the name, "quote"
      const newCat = {
        name: document.getElementById("ca").value.trim(),
        devoured: document.getElementById("devoured").checked,
      };
console.log(document.getElementById("devoured").checked);
      console.log(newCat);
      // Send POST request to create a new quote
      fetch("/api/burgers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newCat),
      }).then(() => {
        // Empty the form
        document.getElementById("ca").value = "";

        // Reload the page so the user can see the new quote
        console.log("Created a new burger!");
        location.reload();
      });
    });
  }

  // DELETE
  const deleteCatBtns = document.querySelectorAll(".delete-cat");

  // Set up the event listeners for each delete button
  deleteCatBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");

      // Send the delete request
      fetch(`/api/burgers/${id}`, {
        method: "DELETE",
      }).then((res) => {
        console.log(res);
        console.log(`Deleted cat: ${id}`);

        // Reload the page
        location.reload();
      });
    });
  });
});
