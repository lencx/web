---
title: git
date: 2019-03-26
spoiler: git tricks
category: git
---

```bash
# branch rename
git branch -m <old_branch> <new_branch>

# rewriting history
git commit --amend

git fetch

# pull: fetch + merge
git pull

git tag <tagname>

# push an 'empty' reference to the remote tag name
git push origin :tagname

# https://stackoverflow.com/questions/5480258/how-to-delete-a-remote-tag
git push --delete origin <tagname>

# delete the local tag
git tag --delete tagname

# Cherry picking is the act of picking a commit from a branch and applying it to another.
git cherry-pick

# delete remote branch
git push origin --delete <branch_name>

# fatal: The upstream branch of your current branch does not match the name of your current branch.
# To push to the upstream branch on the remote, use ...
git branch <branch_name> -u origin/<branch_name>
```
