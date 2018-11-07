const today = new Date();

var taskList = [
    {
        title: "Task Title",
        img:"https://picsum.photos/160/90",
        description:"This is a description of the task. Its important to make sure the task manager is able to deal with really long descriptions. Even if its a list of W's back to back.",
        createdOn: today,
        createdBy: "Jane Smith",
        dueDate: new Date("01/01/2020") /// Has enough time to finish
    },
    {
        title: "Task Title",
        description: "This is a description of the task. Its important to make sure the task manager is able to deal with really long descriptions. Even if its a list of W's back to back.",
        createdOn: today,
        createdBy: "Jane Smith",
        dueDate: new Date("01/01/2018") /// <== Past due.
    },
    {
        title: "Task Title",
        img: "https://picsum.photos/160/90?v1", /// <=== big image,
        description: "This is a description of the task. Its important to make sure the task manager is able to deal with really long descriptions. Even if its a list of W's back to back.",
        createdOn: today,
        createdBy: "Jane Smith",
        dueDate: new Date("01/01/2020"),
        completed: true
    },
    {
        title: "Task Title",
        description:"This is a description of the task. Its important to make sure the task manager is able to deal with really long descriptions. Even if its a list of W's back to back.",
        createdOn: today,
        createdBy: "Jane Smith",
        dueDate: new Date("01/01/2020"),
    },
    {
        title: "Task Title",
        description: "This is a description of the task. Its important to make sure the task manager is able to deal with really long descriptions. Even if its a list of W's back to back.",
        createdOn: today,
        createdBy: "Jane Smith",
        dueDate: new Date("01/01/2018")
    },
    {
        title: "Task Title",
        description: "This is a description of the task. Its important to make sure the task manager is able to deal with really long descriptions. Even if its a list of W's back to back.",
        createdOn: today,
        createdBy: "Jane Smith",
        dueDate: new Date("01/01/2018")
    },
    {
        title: "Task Title",
        description:"This is a description of the task. Its important to make sure the task manager is able to deal with really long descriptions. Even if its a list of W's back to back.",
        createdOn: today,
        createdBy: "Jane Smith",
        dueDate: new Date("01/01/2020")
    }
];
