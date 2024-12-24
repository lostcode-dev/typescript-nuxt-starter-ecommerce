#!/bin/bash

# Define the regex pattern
REGEX="^(feature|bugfix|hotfix|test)/(no-ref|[A-Z0-9]+-[0-9]+)/([a-z0-9-]+)$"

# Function to validate a branch name against the regex
validate_branch() {
    if [[ $1 =~ $REGEX ]]; then
        return 0
    else
        return 1
    fi
}

# Check if inside a Git repository
if [ ! -d ".git" ]; then
    echo "Not a Git repository. Please run this script inside a Git repository."
    exit 1
fi

# Get the current branch name
current_branch=$(git rev-parse --abbrev-ref HEAD)

# Check if the current branch name is empty
if [ -z "$current_branch" ]; then
    echo "Error: Could not retrieve the current branch name."
    exit 1
fi

# Validate the current branch name
validate_branch "$current_branch"
result=$?

# Exit with an error code if the branch is invalid
if [ "$result" -ne 0 ]; then
    echo "Error: The current branch name is invalid."
    exit 1
else
    exit 0
fi