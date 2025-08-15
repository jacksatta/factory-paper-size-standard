#!/usr/bin/env python3
import subprocess, re, sys
from datetime import datetime

def git(*args):
    return subprocess.check_output(['git']+list(args), text=True).strip()

def last_tag():
    try:
        return git('describe','--tags','--abbrev=0')
    except subprocess.CalledProcessError:
        return ''

def commits_since(tag):
    rng = f'{tag}..HEAD' if tag else 'HEAD'
    fmt = '%h%x09%an%x09%ad%x09%s'
    try:
        out = git('log', rng, f'--pretty=format:{fmt}', '--date=short')
        return [l for l in out.splitlines() if l.strip()]
    except subprocess.CalledProcessError:
        return []

def group(subject):
    m = re.match(r'(feat|fix|docs|refactor|perf|test|chore)(\(.+\))?!?:\s+(.*)', subject, re.I)
    if not m:
        return 'other', subject
    return m.group(1).lower(), m.group(3)

def main():
    current_tag = sys.argv[1] if len(sys.argv) > 1 else ''
    prev = last_tag()
    items = commits_since(prev)
    groups = {k:[] for k in ['feat','fix','docs','refactor','perf','test','chore','other']}
    for line in items:
        parts = line.split('\t', 3)
        if len(parts) != 4: 
            continue
        sha, author, date, subject = parts
        key, title = group(subject)
        groups[key].append(f'- {title} ({sha}, {author}, {date})')

    title = current_tag or 'Unreleased'
    print(f'# Release {title}\n')
    print(f'Date: {datetime.utcnow().strftime("%Y-%m-%d")} UTC\n')

    order = ['feat','fix','docs','refactor','perf','test','chore','other']
    labels = {'feat':'Features','fix':'Fixes','docs':'Docs','refactor':'Refactors','perf':'Performance','test':'Tests','chore':'Chores','other':'Other Changes'}

    any_items = False
    for k in order:
        arr = groups.get(k,[])
        if not arr: 
            continue
        any_items = True
        print(f'## {labels[k]}')
        print('\n'.join(arr))
        print()
    if not any_items:
        print('No commits since last tag.')

if __name__ == '__main__':
    main()
