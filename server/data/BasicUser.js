"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasicUser {
    /**
     * Create a User with just the basic information. Good to be used in potentially recursive situations.
     *
     * @param id {Number} the id number of the User
     * @param name {String} the name of the User
     */
    constructor(id, name) {
        this.id = id;
        this.name = name || "";
    }
    /**
     * Returns a pure object of the BasicUser
     *
     * @returns {BasicUser}
     */
    simplify() {
        return this; //Probably
    }
    acquireName() {
        //Do query
    }
    static getBy(id) {
        //TODO: Get BasicUser by id
    }
}
exports.BasicUser = BasicUser;
//# sourceMappingURL=BasicUser.js.map