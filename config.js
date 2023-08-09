// Example config.js from https://github.com/renovatebot/renovate/blob/main/docs/usage/examples/self-hosting.md
module.exports = {
    baseBranches: ["main", "master"],
    enabledManagers: "composer",
    repositories: [
        {
            repository: 'https://github.com/joey-bolts/renovate_discussions_23693'
        },
    ],
};
