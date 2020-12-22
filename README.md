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

Approval of PR's will be handled by the scrum master as well as ticket assignment.  
