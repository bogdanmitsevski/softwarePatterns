class User {
    protected command:any;
    constructor(command:any) {
        this.command = command;
    }


    execute() {
        this.command.execute();
    }
}

class Action {
    protected state:any;
    constructor() {
        this.state = false;
    }

    saveAction () {
        this.state = true;
    };

    editAction () {
        this.state = true;
    }
};


class SaveActionCommand {
    protected action:any;
    constructor(action:any) {
        this.action = action;
    };

    execute () {
        this.action.saveAction();
    };
};


class EditActionCommand {
    protected action:any;
    constructor(action:any) {
        this.action = action;
    }

    execute () {
        this.action.editAction();
    };
};


const action = new Action();
console.log(action);

const saveData = new SaveActionCommand(action);
const editData = new EditActionCommand(action);
editData.execute();
saveData.execute();
console.log(action);
console.log(action);