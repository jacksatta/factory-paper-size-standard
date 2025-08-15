#!/usr/bin/env python3
import subprocess, re, sys, os
from datetime import datetime

def git(cmd):
    return subprocess.check_output(cmd, text=True).strip()

def last_tag():
    try:
        return git(["git","describe","--tags","--abbrev=0"])
    except subprocess.CalledProcessError:
        return ""

def commits_since(tag):
    rng = f"{tag}..HEAD" if tag else "HEAD"
    return git(["git","log",rng,"--pretty=format:%H%x09%an%x09%ad%x09%s","--date=short"]).splitlines()

def group(msg):
    m = re.match(r"(feat|fix|docs|refactor|perf|test|chore)(\(.+\))?!?:\s+(.*)", msg, re.I)
    if not m:
        return "other", msg
    return m.group(1).lower(), m.group(3)

def main():
    tag_env = os.environ.get("GITHUB_REF_NAME") or ""
    if os.environ.get("GITHUB_EVENT_NAME") == "workflow_dispatch":
        tag_env = os.environ.get("INPUT_TAG","") or os.environ.get("GITHUB_EVENT_INPUTS_TAG","") or tag_env

    prev = last_tag()
    items = commits_since(prev)
    groups = {"feat":[],"fix":[],"docs":[],"refactor":[],"perf":[],"test":[],"chore":[],"other":[]}
    for line in items:
        parts = line.split("\t", 3)
        if len(parts) != 4: 
            continue
        _hash, author, date, subject = parts
        g, title = group(subject)
        groups.setdefault(g, []).append(f"- {title} ({author}, {date})")

    print(f"# Release {tag_env or 'Unreleased'}\n")
    print(f"Date: {datetime.utcnow().strftime('%Y-%m-%d')} UTC\n")
    order = ["feat","fix","docs","refactor","perf","test","chore","other"]
    labels = {"feat":"Features","fix":"Fixes","docs":"Docs","refactor":"Refactors","perf":"Performance","test":"Tests","chore":"Chores","other":"Other Changes"}
    any_items = False
    for k in order:
        arr = groups.get(k,[])
        if not arr: 
            continue
        any_items = True
        print(f"## {labels[k]}")
        print("\n".join(arr))
        print()
    if not any_items:
        print("No commits since last tag.")

if __name__ == "__main__":
    main()
