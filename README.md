# Overview

Itadaki Street Series Analyzer is the helper program that accurately keeps track of the gameplay that happens in the game for any ruleset and board selected while playing in tour mode for the entire Itadaki Street series. This analyzer program will also have the capability of user input from the community for data mining and machine learning purposes to store previously known outcomes at any time and to predict outcomes accurately and quickly in realtime.

The Itadaki Street Series Analyzer project is a React 19 and Vite project built with the MongoDB, Express.js, React, and Node.js (MERN) stack. This project is hosted on Microsoft Azure as an App Service and uses the Node 24 LTS stack.

All code and files in this repository are open sourced and can be distributed, cloned, and modified for private use.

## Build Instructions

This project requires binaries and IDEs that can be used with the MERN stack and the supported versions mentioned above.

```
git clone https://github.com/chticer/itadakistreetseriesanalyzer.git
```

The backend directory handles all code and files for retrieving and using project data. The dev script within npm handles starting the server on port 11004 or a custom port as an environment variable (see the "Environment Variables" section).

```
cd backend
npm install
npm run dev
```

The frontend directory handles all code and files for rendering the project on the website. The dev script within npm handles starting the server on port 10004 or a custom port as an environment variables (see the "Environment Variables" section).

```
cd frontend
npm install
npm run dev
```

## Environment Variables

Follow the instructions provided within `backend/environmentfiles/dev/.env` and `frontend/src/environmentfiles/dev/.env` to use environment variables. Any environment variable marked as optional may be deleted.

## Project Support

### Code Contributions

This repository has a bug tracker that is used to keep track of issues with the project. It is recommended that issues should be reproduced at least two (2) times consistently and provide as much information as possible for contributors to replicate the issue. New issues should not be created if the same, or relatively similar, issue is still open and there has been activity within the past thirty (30) days or the current project release version is the same as the version indicated in the issue when it was originally created. This can be done by clicking the Issues tab.

Project development will heavily rely and follow the comments and notes made by contributors in the latest Kanban board. This workflow will ensure on what features and changes will be made in the short-term and long-term and can be done by clicking the Projects tab. Only a broad timeline will be given for a release, including a rough list of pull requests, issues, features, and changes, and can be seen in the milestones section.

### Community Contributions

The Itadaki Street Series Analyzer creator heavily believes that the community should be able to weigh in and provide ways and opportunities for their voices to be heard. This helps strengthen relationships and improvements in both the program and all the people behind the project. Any form of legitimate and constructive suggestions, comments, requests, concerns, and criticisms regarding this project is greatly welcomed. This can be done by clicking the Discussions tab.

This project is currently being offered for free to anyone who wishes to use the analyzer program. Also, all expenses incurred in running and maintaining the project is currently being paid by the Itadaki Street Series Analyzer creator. As project development is being worked on and near completion to the point where it would be widely available and in a production state, costs will increase and project sponsorships may be necessary but there are no plans on any form of financial support right now.

## References

[Repository Code of Conduct](https://github.com/chticer/itadakistreetseriesanalyzer?tab=coc-ov-file)

[Repository Contributing Guidelines](https://github.com/chticer/itadakistreetseriesanalyzer?tab=contributing-ov-file)

[Repository License](https://github.com/chticer/itadakistreetseriesanalyzer?tab=GPL-3.0-1-ov-file)

[Repository Security Policy](https://github.com/chticer/itadakistreetseriesanalyzer?tab=security-ov-file)
