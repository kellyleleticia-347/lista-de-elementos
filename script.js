const input = document.getElementById("taskInput");

const ul = document.getElementById("taskList");

function addTask() {
  if (input.value !== "") {
    const li = document.createElement("li");
    li.style.paddingLeft = "35px"
    li.style.paddingBottom = "5px"
    li.textContent = input.value;
    const removerBotao = document.createElement("button");
    removerBotao.style.marginLeft = "7px"
    removerBotao.textContent = "remover";
    removerBotao.onclick = function () {
      ul.removeChild(li);
    };
    li.appendChild(removerBotao);
    ul.appendChild(li);

    input.value = "";
  } else {
    alert("Por favor , Digite sua tarefa !!");
  }
}
