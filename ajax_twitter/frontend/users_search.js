const APIUtil = require("./api_util.js");

class UsersSearch {
    constructor($el) {
        this.$el = $el;
        this.input = this.$el.find('input[name="query"]');
        this.ul = this.$el.find('ul');
        this.bindEvents();
    }

    bindEvents() {
        this.input.change((e) => {
            e.preventDefault();
            this.handleInput();
        });
    }

    handleInput() {
        console.log("in here");
        APIUtil.searchUsers(this.input.val()).then((data) => console.log(data));
    }
}

module.exports = UsersSearch;