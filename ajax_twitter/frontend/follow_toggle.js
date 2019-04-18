const APIUtil = require("./api_util.js");

class FollowToggle {
    constructor ($el) {
        this.$el = $el;
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");
        this.bindEvents();
        this.render();

    }

    bindEvents() {
        this.$el.click((event) => {
            event.preventDefault();
            this.handleClick();
        });
    }

    render() {
        if (this.followState === "unfollowed") {
            this.$el.text("Follow!");
            this.$el.prop("disabled", false);
        } else if (this.followState === "followed") {
            this.$el.text("Unfollow!");
            this.$el.prop("disabled", false);
        } else if (this.followState === "following" || this.followState === "unfollowing") {
            this.$el.prop("disabled", true);
        }
    }

    handleClick(){
        if (this.followState === "followed") {
            this.followState = "unfollowing";
            this.render();
            APIUtil.unfollowUser(this.userId).then(() => this.toggleFollowState());
        } else {
            this.followState = "following";
            this.render();
            APIUtil.followUser(this.userId).then(() => this.toggleFollowState());
        }
    }

    toggleFollowState(){
        if (this.followState === "unfollowing") {
            this.followState = "unfollowed";
        } else if (this.followState === "following") {
            this.followState = "followed";
        }
        this.render();
    }
}

module.exports = FollowToggle;