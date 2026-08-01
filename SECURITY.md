# Overview

The security policy outlined here pertains to this GitHub repository only. Additional security policies can be viewed under the References section.

Maintaining the highest security standards for this repository is of the upmost importance. Anyone with access to contribute to this repository must adhere to all security standards outlined in security policies that reference this repository.

## Repository Monitoring

This repository uses Dependabot alerts to continuously detect and report malware and vulnerabilities of any files managed by npm packages.

GitHub Actions use repository-level secrets to automatically publish commit changes made to the `dev` branch and merged pull request changed made to the `main` branch. Dependabot use repository-level secrets to automatically create branches on npm package updates and upgrades to be verified and tested on the `dev` branch for non-critical changes and the `main` branch for critical changes. Secrets should only be used in applications that require the use of such secret for its functionality and should not be given to anyone nor known by anyone after using said secret.

All recommendations given by Dependabot should be accepted and adopted. The only exception is if there are compatibility and dependency issues that can only be resolved with outdated or unsupported versions.

## Vulnerability Reporting

This repository uses the Issues tab to manage and coordinate how and when issues will be resolved. Issues will be tracked on the Projects tab and will follow common software development methodologies used in the industry.

If you find any instances of code committed to this repository on any branch that may introduce a vulnerability, post a comment on a new issue, if there is no open issue, or on an existing open issue with details on potential implications of how the vulnerability can cause harm. This includes, but not limited to, passwords, client secrets, access tokens, and personally identifiable information.

## References

[GitHub Security](https://github.com/security)

[Itadaki Street Series Analyzer Security Policy](https://itadakistreetseriesanalyzer.com/securitypolicy)
