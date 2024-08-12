import dotenv from 'dotenv'
dotenv.config();

import express from 'express'

const app = express()
const port = process.env.PORT || 3000

const githubData = {
    "login": "smdekate",
    "id": 90138014,
    "node_id": "MDQ6VXNlcjkwMTM4MDE0",
    "avatar_url": "https://avatars.githubusercontent.com/u/90138014?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/smdekate",
    "html_url": "https://github.com/smdekate",
    "followers_url": "https://api.github.com/users/smdekate/followers",
    "following_url": "https://api.github.com/users/smdekate/following{/other_user}",
    "gists_url": "https://api.github.com/users/smdekate/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/smdekate/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/smdekate/subscriptions",
    "organizations_url": "https://api.github.com/users/smdekate/orgs",
    "repos_url": "https://api.github.com/users/smdekate/repos",
    "events_url": "https://api.github.com/users/smdekate/events{/privacy}",
    "received_events_url": "https://api.github.com/users/smdekate/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Swapnil Dekate",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "MCA Graduate",
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 12,
    "following": 26,
    "created_at": "2021-09-05T11:48:48Z",
    "updated_at": "2024-07-18T07:53:11Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('this is twitter page')
})
app.get('/deploy', (req, res) => {
    res.send('deployed on render')
})

app.get('/github', (req, res) => {
    res.json(
        {
            username: githubData.login,
            name: githubData.name,
            followers: githubData.followers,
            following: githubData.following,
            email: "smdekate@gmail.com",
            repoCount: githubData.public_repos
        }
    )
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})