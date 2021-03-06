// Create a ItemsController class
class ItemsController {
    // Set up the tasks and currentId property in the contructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    // Create the addTask method
    addItem(name, description,createdAt) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            createdAt: createdAt
        };

        // Push the task to the tasks property
        this.items.push(item);
    }
}

