const Main = {

  init: function () {
    this.chacheSelectors();
    this.bindEvents();
  },

  chacheSelectors: function () {
    this.$checkButtons = document.querySelectorAll(".check");
    this.$inputTask = document.querySelector("#input_task");
    this.$list = document.querySelector("#list");
    this.$removeButtons = document.querySelectorAll(".remove");
  },

  bindEvents: function () {
    const self = this;

    this.$checkButtons.forEach(function (button) {
      button.addEventListener("click", self.Events.checkButton_click);
    });

    this.$inputTask.addEventListener("keyup", self.Events.inputTask_keyup.bind(this));
  
    this.$removeButtons.forEach(function (button){
      button.addEventListener("click", self.Events.removeButton_click)
    });
  },

  Events: {
    checkButton_click: function (e) {
      const li = e.target.parentNode;
      const isDone = li.classList.contains("done");
      if (!isDone) {
        return li.classList.add("done");
      }

      return li.classList.remove("done")
    },
    inputTask_keyup: function (e) {
      const key = e.key;
      const value = e.target.value;
      if (key === "Enter") {
        this.$list.innerHTML += `
          <li>
            <div class="check"></div>
            <label class="task">
              ${value}
            </label>
            <button class="remove"></button>
          </li>
        `;
        e.target.value = "";

        this.chacheSelectors();
        this.bindEvents();
      }
    },
    removeButton_click:function(e){
      const li= e.target.parentNode;
      li.classList.add("removed");
      
      setTimeout(() => {
        li.classList.add("hidden");
        li.remove();
      }, 300);
    }
  }
}

Main.init();