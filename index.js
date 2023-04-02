const { program } = require("commander");
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            console.log(allContacts);
            break;
        case "get":
            const oneContact = await contacts.getContactById(id);
            console.log(oneContact);
            break;
        case "add":
            const newContact = await contacts.addContact({ name, email, phone });
            console.log(newContact);
            break;
        case "updateById":
            const updateContact = await contacts.updateById(id, {
                name,
                email,
                phone,
            });
            console.log(updateContact);
            break;
        case "remove":
            const removeContact = await contacts.removeById(id);
            console.log(removeContact);
            break;
        default:
            console.warn("\x1B[31m Unknown action type!");
    }
};

program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-n, --name <type>")
    .option("-e, --email <type>")
    .option("-p, --phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);
