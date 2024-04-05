const title = () => {
  const title = document.getElementById("title");
  const text = "This is your future".split("");

  const h1 = document.createElement("h1");

  text.forEach((letter, i) => {
    h1.innerHTML += `<span style="--i: ${i + 1}">${letter}</span>`;
  });

  title.appendChild(h1);
};

const logo = () => {
  const main = document.getElementById("main");
  const logos = ["html", "css", "discord", "meet", "git", "linux"];
  const section = document.createElement("section");

  logos.forEach((log, i) => {
    section.innerHTML += `<div class="circle" style="--i: ${i + 1}">
      <img class="tech" src="./assets/images/${log}.png" alt="logo de ${log}" />
      <h4>${log}</h4>
    </div>`;
  });

  main.appendChild(section);
};

const addResult = () => {
  const main = document.getElementById("main");
  const h3 = document.createElement("h3");
  h3.innerText = "And just after two weeks of code";

  h3.classList.add("result");

  main.appendChild(h3);
};

const render = () => {
  title();
  logo();
  setTimeout(() => addResult(), 8000);
};

render();
