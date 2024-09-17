const createToDo = (task, deadline, priority) => {
  const id = Date.now();
  let isCompleted = false;
  return {
    task,
    deadline,
    priority,
    isCompleted,

    getId() {
      return this.id;
    },
    getTask() {
      return this.task;
    },
    getDeadline() {
      return this.deadline;
    },
    setDeadLine(time) {
      this.deadline = time;
    },
    toggleComplete() {
      this.isCompleted = !this.isCompleted;
    },
    getIsComplete() {
      return this.isCompleted;
    },
    setNote(note) {
      this.note = note;
    },
    getNote() {
      return this.note;
    },
  };
};

export const consoleLogPrintTask = (obj) => {
  console.log(`
        ${obj.getId() ? "ID: " + obj.getId() : "object has no ID"};
        ${obj.getTask() ? "TASK: " + obj.getTask() : "object has no TASK"};
        ${
          obj.getDeadline()
            ? "ID: " + obj.getDeadline()
            : "object has no DeadLine"
        };

        ${
          obj.getIsComplete()
            ? "COMPLETED: " + obj.getIsComplete()
            : "object has no completion info"
        };
        ${obj.getNote() ? "NOTE: " + obj.getNote() : "object has no Notes"};

        `);
};

export default createToDo;
