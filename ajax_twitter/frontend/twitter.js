const FollowToggle = require("./follow_toggle.js"); 
const UsersSearch = require("./users_search.js");
const APIUtil = require("./api_util.js");

$(() => {
    const $els = $(".follow-toggle");
    const $usersSearches = $(".users-search");
    $els.each(function(index, el) {
        const followToggle = new FollowToggle($(el));
    });
    $usersSearches.each(function(index, el) {
        const usersSearch = new UsersSearch($(el));
    });
});