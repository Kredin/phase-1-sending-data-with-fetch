// Add your code here
function submitData(name, email) {
  const idz = document.querySelector("body");
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      let p = document.createElement("p");
      p.textContent = data.id;
      idz.appendChild(p);
    })
    .catch((error) => {
      let p = document.createElement("p");
      p.textContent = error;
      idz.appendChild(p);
    });
}

submitData("B", "M");
