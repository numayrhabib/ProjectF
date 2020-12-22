# ProjectF

Usually you have the main/master branch which must always be stable and ready to deploy on the go
Since this isnt a full-fledged product as of yet, we wont have branches like testing or prod. 
Our equivalent of prod will be dev. All feature branches can put a PR on dev. Once approved,
the changes are merged and the subsequent branch is deleted. It is expected of devs to then branch
off of the latest dev and continue working on their features.

We will stick to the following branch naming convention

# Feature branches

feature-X/someDescriptionOfFeature , where X = the ticket number assigned by chosen project management tool

# Hotfix branches

hotfix/feature-X , where X = the ticket number for which this hotfix is being pushed

# Pull Requests

Approval of PR's will be handled by the scrum master as well as other things like ticket assignment.
Please follow the below outline when putting in a PR:

--> Double check you are merging into the correct branch (this would ideally be into dev 9/10 times)

--> Set 'Reviewers' to any and all people you want to have a look at your code

--> Set 'Assignees' to the scrum master -- he'll approve and merge when given the all clear

--> Provide a very brief description of what you've done:

	--> Implemented feature X to help achieve Y etc 

--> Tag the PR with the appropriate tag -- helps rest of the team find issues faster

--> Do not worry about closing the branch -- SM will handle it.   

# Knowledge Base

Drop anything you found or think others will find useful here - attach a short description

--> Super useful guide to git: https://www.atlassian.com/git/tutorials

--> Quick link to React docs:  https://reactjs.org/docs/getting-started.html

--> HTML/CSS quick looks ups:  https://www.w3schools.com/

--> Advanced CSS guides:       https://css-tricks.com/

--> Test out your frontend ideas: https://codesandbox.io/

--> And the best resource of all: https://www.youtube.com/ ( !!!!! )
